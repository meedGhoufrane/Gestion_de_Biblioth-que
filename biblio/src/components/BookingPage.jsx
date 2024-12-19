import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

interface Book {
  id: string;
  title: string;
  author: string;
  availableCopies: number;
}

function BookingPage() {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, getAccessToken } = useAuthContext();

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      setError('Failed to fetch book details');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    try {
      const response = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify({
          userId: user?.profile?.sub,
          bookId: id,
          returnDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book');
      }

      alert('Book successfully booked!');
      navigate('/');
    } catch (error) {
      setError('Failed to book the item');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (error || !book) {
    return <div className="text-center p-8 text-red-500">{error || 'Book not found'}</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{book.title}</h3>
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Available Copies: {book.availableCopies}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleBooking}
            disabled={book.availableCopies === 0}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Confirm Booking
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage; 
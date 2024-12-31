import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SidebarDashboard from '../AccountDashboardSidebar';
import axios from 'axios';
import BookCard from './BookCard';
import ModelBook from '../ModelBook';

const MyListDetails: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleBookClick = (bookId: string) => {
        setSelectedBookId(bookId);
    };

    const handleCloseModal = () => {
        setSelectedBookId(null);
    };

    return (
        <div>
            <Header />
            <section className="bj_account_dashboard" data-bg-color="#f5f5f5">
                <div className="container">
                    <div className="row">
                        <SidebarDashboard />
                        <div className="col-lg-9">
                            <div className="account_dashboard_body">
                                <div className="account_dashboard_content">
                                    <div className="account_dashboard_content_header d-flex justify-content-between align-items-center">
                                        <div>
                                            My Lists
                                            <p>Your Total List: {books.length}</p>
                                        </div>
                                        <Link to="/CreateBookList" className="bj_theme_btn">Create Book</Link>
                                    </div>
                                    <div className="content_body">
                                        <div className="my_book_list my_list_details">
                                            {books.map(book => (
                                                <BookCard
                                                    key={book.id}
                                                    title={book.title}
                                                    author={book.author}
                                                    price={book.price}
                                                    imageUrl="assets/img/home-two/choice3.jpg"
                                                    rating={book.rating}
                                                    onQuickView={() => handleBookClick(book.id)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {selectedBookId && (
                <ModelBook
                    bookId={selectedBookId}
                    onClose={handleCloseModal}
                />
            )}
            <Footer/>
        </div>
    );
};

export default MyListDetails; 
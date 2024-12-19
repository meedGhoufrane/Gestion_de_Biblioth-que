import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    { id: 1, title: 'Book Title 1', author: 'Author 1' },
    { id: 2, title: 'Book Title 2', author: 'Author 2' },
    // Add more books as needed
  ];

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList; 
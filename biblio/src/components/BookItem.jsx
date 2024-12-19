import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button>Add to Wishlist</button>
    </div>
  );
};

export default BookItem; 
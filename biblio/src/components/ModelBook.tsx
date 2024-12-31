import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ModelBookProps {
    bookId: string;
    onClose: () => void;
}

const ModelBook: React.FC<ModelBookProps> = ({ bookId, onClose }) => {
    const [bookDetails, setBookDetails] = useState<any | null>(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${bookId}`);
                setBookDetails(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails();
    }, [bookId]);

    if (!bookDetails) {
        return null; // or a loading spinner
    }

    return (
        <div className="modal fade product-quickview-modal" id="productQuickView" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}>
                        <i className="icon_close"></i>
                    </button>
                    <div className="bj_book_single">
                        <div className="bj_book_img flip">
                            <div className="front"><img className="img-fluid" src={bookDetails.coverImageUrl} alt={bookDetails.title} /></div>
                            <div className="back"><img className="img-fluid" src={bookDetails.coverImageUrl} alt={bookDetails.title} /></div>
                            <div className="pr_ribbon">
                                <span className="product-badge">New</span>
                            </div>
                        </div>
                        <div className="bj_book_details">
                            <h2>{bookDetails.title}</h2>
                            <ul className="list-unstyled book_meta">
                                <li>By:<a href="author-single.html">{bookDetails.author}</a></li>
                                <li>Category:<a href="shop-sidebar.html">{bookDetails.genre}</a></li>
                                <li>Tag:<a href="shop-sidebar.html">Best Sellers</a></li>
                            </ul>
                            <div className="ratting review">
                                <div className="star-rating">
                                    <span>{bookDetails.rating}</span>
                                </div>
                                <a href="#product_review" className="woocommerce-review-link">
                                    <span className="count"> {bookDetails.borrowCount} </span>Reviews
                                </a>
                            </div>
                            <div className="price">${bookDetails.price}</div>
                            <p>{bookDetails.description}</p>
                            <div className="d-flex flex-column gap-2">
                                <button className="bj_theme_btn" onClick={onClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelBook; 
import React from 'react';
import { Link } from 'react-router-dom';

interface BookCardProps {
    title: string;
    author: string;
    price: number;
    imageUrl?: string;
    rating: number;
    onQuickView: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, price, imageUrl, rating, onQuickView }) => {
    const defaultImage = 'assets/img/default_book_image.jpg';

    return (
        <div className="best_product_item best_product_item_two">
            <div className="ribon">20% off</div>
            <div className="img">
                <Link to="#">
                    <img src={imageUrl || defaultImage} alt={title} />
                </Link>
                <div className="hover_item">
                    <Link className="quick_button" to="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Wishlist">
                        <i className="icon_heart_alt"></i>
                    </Link>
                    <span data-bs-toggle="tooltip" data-bs-placement="right" title="Quickview">
                        <button className="quick_button" onClick={onQuickView}>
                            <i className="arrow_move"></i>
                        </button>
                    </span>
                    <Link className="quick_button" to="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Compare">
                        <i className="ti-control-shuffle"></i>
                    </Link>
                </div>
                {/* <button type="button" className="bj_theme_btn add-to-cart-automated" onClick={onAddToCart}>
                    Add to Cart
                </button> */}
            </div>
            <div className="bj_new_pr_content">
                <Link to="product-single.html">
                    <h6 className="book_title">{title}</h6>
                </Link>
                <div className="writer_name">By - <Link to="author-single.html">{author}</Link></div>
                <div className="bj_pr_meta d-flex">
                    <div className="book_price">${price}</div>
                    <div className="ratting">
                        <img src="assets/img/home/raiting.png" alt="" />
                        {rating}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard; 
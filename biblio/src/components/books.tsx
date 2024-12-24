import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);

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

    return (
        <div className="col-lg-9">
            <form role="search" method="get" className="pr_search_form input-group" action="#">
                <input type="text" name="s" value="" className="form-control search-field" id="search" placeholder="Search off book store.." />
                <button type="submit"><i className="ti-search"></i></button>
            </form>
            <div className="shop_top d-flex align-items-center justify-content-between">
                <div className="shop_menu_left">{books.length} Books</div>
                <div className="shop_menu_right d-flex align-items-center justify-content-end">
                    Sort by
                    <form className="woocommerce-ordering" method="get">
                        <select name="orderby" className="orderby selectpickers">
                            <option value="menu_order" selected>Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by latest</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="row">
                {books.map(book => (
                    <div key={book.id} className="col-xl-3 col-lg-4 col-sm-6 projects_item">
                        <div className="best_product_item best_product_item_two shop_product">
                            <div className="img">
                                <a href="#"><img src="assets/img/home-two/choice3.jpg" alt={book.title} /></a>
                                <div className="pr_ribbon">
                                    <span className="product-badge">New</span>
                                    <div className="ratting">
                                        <img src="assets/img/star-1.png" alt="" />{book.rating}
                                    </div>
                                </div>
                                <div className="hover_item">
                                    <a className="quick_button" href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Wishlist"><i className="icon_heart_alt"></i></a>
                                    <span data-bs-toggle="tooltip" data-bs-placement="right" title="Quickview"><button className="quick_button" data-bs-toggle="modal" data-bs-target="#productQuickView"><i className="arrow_move"></i></button></span>
                                    <a className="quick_button" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Compare"><i className="ti-control-shuffle"></i></a>
                                </div>
                                <button type="button" className="bj_theme_btn add-to-cart-automated" data-name={book.title} data-img="assets/img/home-two/choice3.jpg" data-price={book.price} data-mrp={book.totalPrice}>
                                    <i className="icon_cart_alt"></i>Add To Cart
                                </button>
                            </div>
                            <div className="bj_new_pr_content">
                                <a href="product-single.html">
                                    <h4 className="bj_new_pr_title">{book.title}</h4>
                                </a>
                                <div className="bj_pr_meta d-flex">
                                    <div className="book_price"><del>{book.totalPrice}</del>${book.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <nav aria-label="...">
                    <ul className="pagination pagi-content">
                        <li className="page-item">
                            <a className="page-link" href="#"><i className="ti-angle-left"></i>Prev</a>
                        </li>
                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next<i className="ti-angle-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Books;

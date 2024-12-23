import React from 'react';


const BookingArea: React.FC = () => {
    return (
        <div>
            <section className="bj_shop_area sec_padding" data-bg-color="#f5f5f5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop_sidebar">
                                <div className="widget filter_widget">
                                    <h3 className="shop_sidebar_title">
                                        <a href="#"><img src="assets/img/shop/filter.svg" alt="" /></a>Filter
                                    </h3>
                                </div>
                                <div className="widget shop_category_widget">
                                    <h4 className="shop_sidebar_title_small"><i className="icon-category-icon"></i>Category</h4>
                                    <ul className="list-unstyled shop_category_list">
                                        <li><a href="#">All categories</a></li>
                                        <li><a href="#">Drama</a></li>
                                        <li><a href="#">Mystery</a></li>
                                        <li><a href="#">Novels</a></li>
                                        <li><a href="#">Recipe Books</a></li>
                                    </ul>
                                    <div className="collapse" id="collapseExample">
                                        <ul className="list-unstyled shop_category_list">
                                            <li><a href="#">All categories</a></li>
                                            <li><a href="#">Drama</a></li>
                                            <li><a href="#">Mystery</a></li>
                                            <li><a href="#">Novels</a></li>
                                            <li><a href="#">Recipe Books</a></li>
                                        </ul>
                                    </div>
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Show more <i className="ti-angle-down"></i>
                                    </a>
                                </div>
                                <div className="widget author_widget">
                                    <h4 className="shop_sidebar_title_small"><i className="icon-pen"></i>Author</h4>
                                    <div className="author_choose_list">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="burt" id="burt" value="burt" />
                                            <label className="form-check-label" htmlFor="burt">Burt Geller</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="candy" id="candy" value="candy" />
                                            <label className="form-check-label" htmlFor="candy">Candy Carson</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="drew" id="drew" value="drew" />
                                            <label className="form-check-label" htmlFor="drew">Drew Berrymore</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="karen" id="karen" value="karen" />
                                            <label className="form-check-label" htmlFor="karen">Karen Perry</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="richard" id="richard" value="richard" />
                                            <label className="form-check-label" htmlFor="richard">Richard Mann</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget author_widget">
                                    <h4 className="shop_sidebar_title_small"><i className="fa-regular fa-star"></i>Rating</h4>
                                    <div className="author_choose_list">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="rating_filter" id="5_star_filter" value="5 star" />
                                            <label className="form-check-label" htmlFor="5_star_filter">
                                                <span className="rating">
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="rating_filter" id="4_star_filter" value="4 star" />
                                            <label className="form-check-label" htmlFor="4_star_filter">
                                                <span className="rating">
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star "></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="rating_filter" id="3_star_filter" value="3 star" />
                                            <label className="form-check-label" htmlFor="3_star_filter">
                                                <span className="rating">
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star "></i>
                                                    <i className="fa-solid fa-star "></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="rating_filter" id="2_star_filter" value="2 star" />
                                            <label className="form-check-label" htmlFor="2_star_filter">
                                                <span className="rating">
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star "></i>
                                                    <i className="fa-solid fa-star "></i>
                                                    <i className="fa-solid fa-star "></i>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="rating_filter" id="1_star_filter" value="1 star" />
                                            <label className="form-check-label" htmlFor="1_star_filter">
                                                <span className="rating">
                                                    <i className="fa-solid fa-star filled"></i>
                                                    <i className="fa-solid fa-star "></i>
                                                    <i className="fa-solid fa-star "></i>
                                                    <i className="fa-solid fa-star "></i>
                                                    <i className="fa-solid fa-star "></i>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget price_widget">
                                    <h4 className="shop_sidebar_title_small"><i className="icon-price"></i>Price</h4>
                                    <div id="slider-range" data-price-min="230" data-price-max="1233"></div>
                                    <div className="price-filters d-flex justify-content-between">
                                        <div className="left">
                                            <label htmlFor="price-filter-min">$</label>
                                            <input type="number" id="price-filter-min" placeholder="230" aria-label="Minimum price for filtering products" />
                                        </div>
                                        <div className="right">
                                            <label htmlFor="price-filter-max" aria-label="Maximum price for filtering products">$</label>
                                            <input type="number" id="price-filter-max" placeholder="1233" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form role="search" method="get" className="pr_search_form input-group" action="#">
                                <input type="text" name="s" value="" className="form-control search-field" id="search" placeholder="Search off book store.." />
                                <button type="submit"><i className="ti-search"></i></button>
                            </form>
                            <div className="shop_top d-flex align-items-center justify-content-between">
                                <div className="shop_menu_left">500 Books</div>
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
                                <div className="col-xl-3 col-lg-4 col-sm-6 projects_item">
                                    <div className="best_product_item best_product_item_two shop_product">
                                        <div className="img">
                                            <a href="#"><img src="assets/img/author_book1.jpg" alt="book" /></a>
                                            <div className="pr_ribbon">
                                                <span className="product-badge">New</span>
                                                <div className="ratting">
                                                    <img src="assets/img/star-1.png" alt="" />4.9
                                                </div>
                                            </div>
                                            <div className="hover_item">
                                                <a className="quick_button" href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Wishlist"><i className="icon_heart_alt"></i></a>
                                                <span data-bs-toggle="tooltip" data-bs-placement="right" title="Quickview"><button className="quick_button" data-bs-toggle="modal" data-bs-target="#productQuickView"><i className="arrow_move"></i></button></span>
                                                <a className="quick_button" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Compare"><i className="ti-control-shuffle"></i></a>
                                            </div>
                                            <button type="button" className="bj_theme_btn add-to-cart-automated" data-name="A Storytelling Workbook" data-img="assets/img/author_book1.jpg" data-price="25" data-mrp="120">
                                                <i className="icon_cart_alt"></i>Add To Cart
                                            </button>
                                        </div>
                                        <div className="bj_new_pr_content">
                                            <a href="product-single.html">
                                                <h4 className="bj_new_pr_title">A Storytelling Workbook</h4>
                                            </a>
                                            <div className="bj_pr_meta d-flex">
                                                <div className="book_price"><del>120</del>$25</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingArea;

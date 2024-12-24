import React from 'react';

const ShopSidebar: React.FC = () => {
    return (
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
        </div>
    );
};

export default ShopSidebar; 
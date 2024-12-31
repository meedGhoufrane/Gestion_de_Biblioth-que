import React from 'react';
import { useNavigate } from 'react-router-dom';

const Arrivals: React.FC = () => {
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/bookingbook'); 
    };
    return (
        
        <div className="container">
            <div className="section_title section_title_two text-center wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="title title_two">New Arrivals</h2>
                <p>Reading books helps you to develop your communication skill</p>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="bj_new_pr_item_two d-flex wow fadeInUp" data-wow-delay="0.2s">
                        <a href="product-single.html" className="img"><img src="assets/img/home/new_book_img1.jpg" alt="book" /></a>
                        <div className="bj_new_pr_content_two">
                            <a href="shop-sidebar.html" className="category">Life</a>
                            <a href="product-single.html">
                                <h4 className="bj_new_pr_title">The light we can’t see</h4>
                            </a>
                            <div className="writer_name">by <a href="author-single.html">Anthony Doerr</a></div>
                            <div className="book_price"><sup>$</sup>25<sup>.00</sup></div>
                            <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="bj_new_pr_item_two d-flex wow fadeInUp" data-wow-delay="0.3s">
                        <a href="product-single.html" className="img"><img src="assets/img/home/new_book_img2.jpg" alt="book" /></a>
                        <div className="bj_new_pr_content_two">
                            <a href="shop-sidebar.html" className="category">Novel</a>
                            <a href="product-single.html">
                                <h4 className="bj_new_pr_title">Where The Crawdads</h4>
                            </a>
                            <div className="writer_name">by <a href="author-single.html">Anthony Doerr</a></div>
                            <div className="book_price"><sup>$</sup>50<sup>.00</sup></div>
                            <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="bj_new_pr_item_two d-flex wow fadeInUp" data-wow-delay="0.4s">
                        <a href="product-single.html" className="img"><img src="assets/img/home/new_book_img3.jpg" alt="book" /></a>
                        <div className="bj_new_pr_content_two">
                            <a href="shop-sidebar.html" className="category">Comic</a>
                            <a href="product-single.html">
                                <h4 className="bj_new_pr_title">Rich People Problems</h4>
                            </a>
                            <div className="writer_name">by <a href="author-single.html">Anthony Doerr</a></div>
                            <div className="book_price"><sup>$</sup>50<sup>.00</sup></div>
                            <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="bj_new_pr_item_two d-flex wow fadeInUp" data-wow-delay="0.5s">
                        <a href="product-single.html" className="img"><img src="assets/img/home/new_book_img5.jpg" alt="book" /></a>
                        <div className="bj_new_pr_content_two">
                            <a href="shop-sidebar.html" className="category">ROMANCE</a>
                            <a href="product-single.html">
                                <h4 className="bj_new_pr_title">A heart so broken</h4>
                            </a>
                            <div className="writer_name">by <a href="author-single.html">Anthony Doerr</a></div>
                            <div className="book_price"><sup>$</sup>75<sup>.00</sup></div>
                            <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="bj_new_pr_item_two d-flex wow fadeInUp" data-wow-delay="0.6s">
                        <a href="product-single.html" className="img"><img src="assets/img/home/new_book_img1.jpg" alt="book" /></a>
                        <div className="bj_new_pr_content_two">
                            <a href="shop-sidebar.html" className="category">SUFI</a>
                            <a href="product-single.html">
                                <h4 className="bj_new_pr_title">Follow me to ground</h4>
                            </a>
                            <div className="writer_name">by <a href="author-single.html">Anthony Doerr</a></div>
                            <div className="book_price"><sup>$</sup>50<sup>.00</sup></div>
                            <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="bj_new_pr_item_two d-flex wow fadeInUp" data-wow-delay="0.7s">
                        <a href="product-single.html" className="img"><img src="assets/img/home/new_book_img6.jpg" alt="book" /></a>
                        <div className="bj_new_pr_content_two">
                            <a href="shop-sidebar.html" className="category">POETRY</a>
                            <a href="product-single.html">
                                <h4 className="bj_new_pr_title">Long Bright River</h4>
                            </a>
                            <div className="writer_name">by <a href="author-single.html">Anthony Doerr</a></div>
                            <div className="book_price"><sup>$</sup>90<sup>.00</sup></div>
                            <a href="#" className="bj_theme_btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <button
                    className="bj_theme_btn strock_btn blue_strock_btn wow fadeInUp"
                    data-wow-delay="0.4s"
                    onClick={handleViewAllClick}
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default Arrivals;

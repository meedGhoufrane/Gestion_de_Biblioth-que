import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Arrivals from '../components/Arrivals';


const Home = () => {

    return (
        <div className="body_wrapper">
            <Header />
            <section className="bj_banner_area banner_animation_03" data-bg-color="#f5f5f5">
                <div className="container">
                    <main className="home">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="bj_banner_content">
                                        <div className="offer_text wow fadeInUp">
                                            SALE UPTO <span>20% OFF</span>
                                        </div>
                                        <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                                            Meet your next favorite book
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="0.4s">
                                            Unleash your imagination with epic fantasy sagas, mystical
                                            adventures, and tales of otherworldly realms. Embark on quests
                                            with heroes.
                                        </p>
                                        <div className="d-flex">
                                            <a href="shop.html" className="bj_theme_btn wow fadeInLeft" data-wow-delay="0.2s">SHOP NOW</a>
                                            <a href="#product_tab_showcase_id" className="bj_theme_btn strock_btn wow fadeInLeft" data-wow-delay="0.3s">TAKE A TOUR</a>
                                        </div>
                                        <div className="d-flex community_info_wrapper wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="community_info">
                                                <h5>Our Community</h5>
                                                <div className="people_img">
                                                    <div className="avater_img">
                                                        <img src="assets/img/home/avater_one.png" alt="" />
                                                    </div>
                                                    <div className="avater_img">
                                                        <img src="assets/img/home/avater2.png" alt="" />
                                                    </div>
                                                    <div className="avater_img">
                                                        <img src="assets/img/home/avater3.png" alt="" />
                                                    </div>
                                                    <div className="avater_img">
                                                        <img src="assets/img/home/avater4.png" alt="" />
                                                    </div>
                                                    <div className="avater_img">
                                                        <i className="fa-solid fa-plus" tabIndex={-1}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="community_info_number">
                                                <div className="number"><span className="counter">100</span>k+</div>
                                                <p>Book Readers worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bj_banner_img">
                                        <img className="wow fadeInRight" data-wow-delay="0.4s" src="assets/img/home/girl.png" alt="" />
                                        <div className="shape_one">
                                            <img className="layer" data-depth="-0.15" src="assets/img/home/star-one.png" alt="" />
                                        </div>
                                        <div className="shape_two">
                                            <img className="layer" data-depth="-0.25" src="assets/img/home/star-two.png" alt="" />
                                        </div>
                                        <div className="shape_three">
                                            <img className="layer" data-depth="-0.15" src="assets/img/home/round.png" alt="" />
                                        </div>
                                        <div className="shape_four">
                                            <img src="assets/img/home/dot.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section_title wow fadeInUp">
                            <h2 className="title title_two">Browse By Genres</h2>
                        </div>
                        <div className="row wow fadeInUp" data-wow-delay="0.2s">
                            <div className="col-lg-4">
                                <ul className="nav nav-pills tab_slider_thumb" id="pills-tab-one" role="tablist">
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link active" id="pills-adventure-tab" data-bs-toggle="pill" data-bs-target="#pills-adventure" role="tab" aria-controls="pills-adventure" aria-selected="true">
                                            <strong>Adventure</strong> <span>(250 Books)</span></a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-bio-tab" data-bs-toggle="pill" data-bs-target="#pills-bio" role="tab" aria-controls="pills-bio" aria-selected="false"><strong>Biography</strong> <span>(310 Books) </span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-classic-tab" data-bs-toggle="pill" data-bs-target="#pills-classic" role="tab" aria-controls="pills-classic" aria-selected="false"><strong>Classic</strong> <span>(450 Books)</span></a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-harvard-tab" data-bs-toggle="pill" data-bs-target="#pills-harvard" role="tab" aria-controls="pills-harvard" aria-selected="false"><strong>Harvard ClassNameics</strong> <span>(150 Books)</span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" role="tab" aria-selected="false">
                                            <strong>Designing Books</strong> <span> (250 Books) </span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-philosophy-tab" data-bs-toggle="pill" data-bs-target="#pills-philosophy" role="tab" aria-selected="false"><strong>Philosophy</strong> <span> (590 Books) </span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-science-tab" data-bs-toggle="pill" data-bs-target="#pills-science" role="tab" aria-selected="false"><strong>Science
                                            Fiction</strong> <span> (250 Books) </span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-short-tab" data-bs-toggle="pill" data-bs-target="#pills-short" role="tab" aria-selected="false"><strong>Short
                                            Story</strong> <span>(190 Books) </span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-romantic-tab" data-bs-toggle="pill" data-bs-target="#pills-romantic" role="tab" aria-selected="false"><strong>Romantic</strong> <span> (120 Books) </span>
                                        </a>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <a className="nav-link" id="pills-thriller-tab" data-bs-toggle="pill" data-bs-target="#pills-thriller" role="tab" aria-selected="false"><strong>Thriller</strong> <span> (140 Books) </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content" id="pills-tabContent-two">
                                    <div className="tab-pane fade show active" id="pills-adventure" role="tabpanel" aria-labelledby="pills-adventure-tab">
                                        <div className="tab_slider_content slick_slider_tab">
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Songbird's Melody</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Muaz BK</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Songbird's Melody</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Muaz BK</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Songbird's Melody</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Muaz BK</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-bio" role="tabpanel" aria-labelledby="pills-bio-tab">
                                        <div className="tab_slider_content slick_slider_tab">

                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book3.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-classic" role="tabpanel" aria-labelledby="pills-classic-tab">
                                        <div className="tab_slider_content slick_slider_tab">

                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book3.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-harvard" role="tabpanel" aria-labelledby="pills-harvard-tab">
                                        <div className="tab_slider_content slick_slider_tab">
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book4.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-short" role="tabpanel" aria-labelledby="pills-short-tab">
                                        <div className="tab_slider_content slick_slider_tab">

                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-philosophy" role="tabpanel" aria-labelledby="pills-philosophy-tab">
                                        <div className="tab_slider_content slick_slider_tab">
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book5.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-romantic" role="tabpanel" aria-labelledby="pills-romantic-tab">
                                        <div className="tab_slider_content slick_slider_tab">
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-science" role="tabpanel" aria-labelledby="pills-science-tab">
                                        <div className="tab_slider_content slick_slider_tab">

                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-thriller" role="tabpanel" aria-labelledby="pills-thriller-tab">
                                        <div className="tab_slider_content slick_slider_tab">
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book3.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                                        <div className="tab_slider_content slick_slider_tab">
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book4.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book3.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book2.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Austin Kelon</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bj_new_pr_item">
                                                    <a href="product-single.html" className="img">
                                                        <img src="assets/img/home/tab_book1.png" alt="book" />
                                                    </a>
                                                    <a href="my-wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist" className="wish_btn" tabIndex={-1}><i className="icon_heart_alt"></i></a>
                                                    <div className="bj_new_pr_content_two">
                                                        <div className="d-flex justify-content-between">
                                                            <a href="product-single.html">
                                                                <h5>The Midnight Library</h5>
                                                            </a>
                                                            <div className="book_price">
                                                                <sup>$</sup>25<sup>.00</sup>
                                                            </div>
                                                        </div>
                                                        <div className="writer_name">
                                                            <i className="icon-user"></i><a href="author-single.html">Rick Riordan</a>
                                                        </div>
                                                        <div className="ratting">
                                                            <div className="ratting_icon">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                            <span>(252)</span>
                                                        </div>
                                                        <a href="checkout.html" className="bj_theme_btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Arrivals />
                    </main>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home; 
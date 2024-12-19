const Footer = () => {
    return(
        <footer className="bj_footer_area_two bj_footer_area_four" data-bg-color="#212833">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="f_widget link_widget pe-4">
                                <a href="#" className="f_logo">
                                    <img src="/assets/img/home/logo-white.svg" alt="f_logo" />
                                </a>
                                <div className="footer_subscribes">
                                    <h2 className="f_widget_title">Subscribe Now</h2>
                                    <form action="#">
                                        <div className="footer_subscribe_form">
                                            <input type="text" placeholder="Enter your Email" className="form-control" />
                                            <button type="submit" className="bj_theme_btn">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f_widget link_widget">
                                <h2 className="f_widget_title">Company</h2>
                                <ul className="list-unstyled list">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                    <li><a href="blog-grid.html">Blog</a></li>
                                    <li><a href="author.html">Author</a></li>
                                    <li><a href="book-listing.html">Books</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f_widget link_widget">
                                <h2 className="f_widget_title">Services</h2>
                                <ul className="list-unstyled list">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="my-orders.html">Order</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="my-wishlist.html">Wishlist</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f_widget link_widget">
                                <h2 className="f_widget_title">Pages</h2>
                                <ul className="list-unstyled list">
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="registration.html">Register</a></li>
                                    <li><a href="typography.html">Typography</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                    <li><a href="my-ebook-library.html">Ebook Library</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="f_widget link_widget">
                                <h2 className="f_widget_title">Contacs Us</h2>
                                <ul className="list-unstyled list">
                                    <li><a href="tel:610383766284"><i className="fa-solid fa-phone-volume"></i>+61 (0) 3
                                            8376 6284</a></li>
                                    <li><a href="mailto:noreply@bookjar.com"><i className="fa-solid fa-envelope"></i>noreply@bookjar.com</a></li>
                                </ul>
                                <ul className="list-unstyled f_social_round">
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom d-flex  justify-content-center">
                    <p>© 2024 Bookjar. All Rights Reserved</p>
                </div>
            </div>
        </footer>    
    );
};

export default Footer;
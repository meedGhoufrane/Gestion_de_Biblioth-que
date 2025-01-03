import React from 'react';
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    

    // const signOutRedirect = () => {
    //     const clientId = "mm0d3de70f9ju19tvaihoa9f4";
    //     const logoutUri = "<logout uri>";
    //     const cognitoDomain = "https://us-east-11pw3pmere.auth.us-east-1.amazoncognito.com";

    //     localStorage.clear();

    //     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    // };

    const usergroup = auth?.user?.profile['cognito:groups'][0] === "admin";
    console.log(auth);

    return (
        <header className="header_area header_relative header_blue">
            <nav className="navbar navbar-expand-lg menu_one menu_white" id="header">
                <div className="container">
                    <a className="navbar-brand sticky_logo" onClick={() => navigate("/home")}>
                        <img src="assets/img/home/logo-white.svg" alt="logo" />
                        <img src="assets/img/home-two/logo-dark.svg" alt="logo" />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu_toggle">
                            <span className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span className="hamburger-cross">
                                <span></span>
                                <span></span>
                            </span>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav menu w_menu ms-auto me-auto">
                            <li className="nav-item dropdown submenu active">
                                <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HOME
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item active">
                                        <a href="index.html" className="nav-link">Home One</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-2.html" className="nav-link">Home Two</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-3.html" className="nav-link">Home Three</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-4.html" className="nav-link">Home Four</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown submenu">
                                <a className="nav-link dropdown-toggle" href="shop.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop
                                </a>

                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="shop.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Shop
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="shop.html" className="nav-link">Shop</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="shop-no-sidebar.html" className="nav-link">Shop No Sidebar</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="product-single.html" className="nav-link">Product Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="cart.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Cart
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="cart.html" className="nav-link">Cart</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="cart-guest.html" className="nav-link">Cart Guest</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <a className="nav-link dropdown-toggle" href="checkout.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Checkout
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="checkout.html" className="nav-link">Checkout</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="checkout-login.html" className="nav-link">Checkout Login</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="checkout-gift.html" className="nav-link">Checkout Gift</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>


                            {usergroup && (
                                <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href="my-account.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dashboard
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item dropdown submenu">
                                            <a className="nav-link dropdown-toggle" href="my-orders.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Orders
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="my-orders.html" className="nav-link">Orders</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="order-track.html" className="nav-link">Order Tracking</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="order-confrmation.html" className="nav-link">Thank You Page</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="my-ebook-library.html" className="nav-link">Ebook Library</a>
                                        </li>

                                        <li className="nav-item dropdown submenu">
                                            <a className="nav-link dropdown-toggle" href="my-list.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Book List
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a className="nav-link" onClick={() => navigate("/BookList")}>Book List</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" onClick={() => navigate("/my-list-details")}>Book List Details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="my-list-create.html" className="nav-link">Create Book List</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown submenu">
                                            <a className="nav-link dropdown-toggle" href="my-address.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Address Book
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="my-address.html" className="nav-link">Address Book</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="add-new-address.html" className="nav-link">Add New Address</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="my-following-authors.html" className="nav-link">Following Authors</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="my-rating-reviews.html" className="nav-link">Rating & Reviews</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="my-wishlist.html" className="nav-link">Wishlist</a>
                                        </li>
                                    </ul>
                                </li>
                            )}
                            <li className="nav-item dropdown submenu mega_menu tab-demo">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore
                                </a>
                                <ul className="dropdown-menu sub">
                                    <li>
                                        <div className="row">
                                            <div className="col-lg-5 tabHeader">
                                                <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <li className="nav-item active">
                                                        <a className="nav-link" id="v-pills-tour-tab" data-toggle="pill" href="#v-pills-tour" role="tab" aria-controls="v-pills-tour" aria-selected="false">Utility Pages</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="v-others-menu-tab" data-toggle="pill" href="#v-others-menu" role="tab" aria-controls="v-others-menu" aria-selected="false">Company</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="v-pills-doc-tab" data-toggle="pill" href="#v-pills-doc" role="tab" aria-controls="v-pills-doc" aria-selected="true">Shop Pages</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="v-pills-code-tab" data-toggle="pill" href="#v-pills-code" role="tab" aria-controls="v-pills-code" aria-selected="false">Dashboard</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="v-pills-layout-tab" data-toggle="pill" href="#v-pills-layout" role="tab" aria-controls="v-pills-layout" aria-selected="false">Blog & Author</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="tab-content tabContent" id="v-pills-tabContent">
                                                    <div className="tab-pane fade active show" id="v-pills-tour" role="tabpanel" aria-labelledby="v-pills-tour-tab">
                                                        <div className="d-flex">
                                                            <ul className="list-unstyled tab_list w_100">
                                                                <li>
                                                                    <a href="login.html">Sign In</a>
                                                                </li>
                                                                <li>
                                                                    <a href="registration.html">Sign Up</a>
                                                                </li>
                                                                <li>
                                                                    <a href="typography.html">Typography</a>
                                                                </li>
                                                                <li>
                                                                    <a href="page-banner-style-2.html">Banner style
                                                                        02</a>
                                                                </li>
                                                                <li>
                                                                    <a href="page-banner-style-3.html">Banner style
                                                                        03</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-others-menu" role="tabpanel" aria-labelledby="v-others-menu-tab">
                                                        <div className="d-flex">
                                                            <ul className="list-unstyled tab_list w_100">
                                                                <li>
                                                                    <a href="book-listing.html">Book Listing</a>
                                                                </li>
                                                                <li>
                                                                    <a href="about.html">About</a>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html">Contact Us</a>
                                                                </li>
                                                                <li>
                                                                    <a href="terms-condition.html">Terms & Services</a>
                                                                </li>
                                                                <li>
                                                                    <a href="privacy-policy.html">Privacy Policy</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-doc" role="tabpanel" aria-labelledby="v-pills-doc-tab">
                                                        <div className="d-flex">
                                                            <ul className="list-unstyled tab_list">
                                                                <li>
                                                                    <a href="shop.html">Shop</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="product-single.html">Product Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="cart.html">Cart</a>
                                                                </li>
                                                                <li>
                                                                    <a href="cart-guest.html">Cart Guest</a>
                                                                </li>
                                                            </ul>
                                                            <ul className="list-unstyled tab_list">
                                                                <li>
                                                                    <a href="checkout.html">Checkout</a>
                                                                </li>
                                                                <li>
                                                                    <a href="checkout-gift.html">Checkout Gift</a>
                                                                </li>
                                                                <li>
                                                                    <a href="checkout-login.html">Checkout Login</a>
                                                                </li>

                                                                <li>
                                                                    <a href="my-wishlist.html">Wishlist</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-code" role="tabpanel" aria-labelledby="v-pills-code-tab">
                                                        <div className="d-flex">
                                                            <ul className="list-unstyled tab_list">
                                                                <li>
                                                                    <a href="my-account.html">User Profile</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-orders.html">Orders</a>
                                                                </li>
                                                                <li>
                                                                    <a href="order-track.html">Order Tracking</a>
                                                                </li>
                                                                <li>
                                                                    <a href="order-confrmation.html">Thank You Page</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-ebook-library.html">Ebook Library</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-following-authors.html">Following
                                                                        Authors</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-rating-reviews.html">Rating &
                                                                        Authors</a>
                                                                </li>

                                                            </ul>
                                                            <ul className="list-unstyled tab_list">
                                                                <li>
                                                                    <a href="my-list.html">Book List</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-list-details.html">Book List Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-list-create.html">Create Book List</a>
                                                                </li>
                                                                <li>
                                                                    <a href="my-address.html">Address Book</a>
                                                                </li>
                                                                <li>
                                                                    <a href="add-new-address.html">Add New Address</a>

                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-layout" role="tabpanel" aria-labelledby="v-pills-layout-tab">
                                                        <div className="d-flex">
                                                            <ul className="list-unstyled tab_list">
                                                                <li>
                                                                    <a href="blog-grid.html">Blog Grid</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-extend-grid.html">Extended Grid</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-list.html">Blog List</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-details.html">Blog Details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="author.html">Author</a>
                                                                </li>
                                                                <li>
                                                                    <a href="author-single.html">Author Single</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown submenu">
                                <a className="nav-link dropdown-toggle" href="blog-list.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
                                </a>

                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="blog-grid.html" className="nav-link">Blog Grid</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog-extend-grid.html" className="nav-link">Extended Grid</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog-list.html" className="nav-link">Blog List</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blog-details.html" className="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="alter_nav">
                            <ul className="navbar-nav search_cart menu">
                                <li className="nav-item search">
                                    <a className="nav-link search-btn" href="javascript:void(0);"><i className="icon-search"></i></a>
                                    <form action="#" method="get" className="menu-search-form">
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search here.." />
                                            <button type="submit">
                                                <i className="ti-arrow-right"></i>
                                            </button>
                                        </div>
                                    </form>
                                </li>
                                <li className="nav-item shpping-cart dropdown submenu">
                                    <a className="cart-btn nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-shopping-basket"></i><span className="num">2</span></a>
                                    <ul className="dropdown-menu">
                                        <li className="cart-single-item clearfix">
                                            <div className="cart-img">
                                                <img src="assets/img/cart1.jpg" alt="styler" />
                                            </div>
                                            <div className="cart-content text-left">
                                                <p className="cart-title">
                                                    <a href="product-single.html">Pale pink and black buttoned dress</a>
                                                </p>
                                                <p><del>$400.00</del> - $350.00</p>
                                            </div>
                                            <div className="cart-remove">
                                                <a href="#" className="action"><span className="ti-close"></span></a>
                                            </div>
                                        </li>
                                        <li className="cart-single-item clearfix">
                                            <div className="cart-img">
                                                <img src="assets/img/cart1.jpg" alt="styler" />
                                            </div>
                                            <div className="cart-content text-left">
                                                <p className="cart-title">
                                                    <a href="product-single.html">Vera bradley lug- gage large
                                                        duffel</a>
                                                </p>
                                                <p>$350.00</p>
                                            </div>
                                            <div className="cart-remove">
                                                <a href="#" className="action"><span className="ti-close"></span></a>
                                            </div>
                                        </li>
                                        <li className="cart_f">
                                            <div className="cart-pricing">
                                                <p className="total">
                                                    Subtotal :<span className="p-total text-end">$358.00</span>
                                                </p>
                                            </div>
                                            <div className="cart-button text-center">
                                                <a href="cart.html" className="btn btn-cart get_btn pink">View Cart</a>
                                                <a href="checkout.html" className="btn btn-cart get_btn dark">Checkout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item user ms-3">
                                    {auth.isAuthenticated ? (
                                        <a className="nav-link" onClick={() => navigate("/profile")}>
                                            <i className="icon-user"></i>
                                        </a>

                                    ) : (
                                        <button
                                            onClick={() => auth.signinRedirect()}
                                            className="bj_theme_btn strock_btn hidden-sm hidden-xs"><i className="fa-regular fa-user"></i>Login
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 
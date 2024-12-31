import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SidebarDashboard from '../AccountDashboardSidebar';


const BookList: React.FC = () => {
    return (
        <div>
            <Header />
            <section className="bj_account_dashboard" data-bg-color="#f5f5f5">
                <div className="container">
                    <div className="row">
                        <SidebarDashboard />
                        <div className="col-lg-9">
                            <div className="account_dashboard_body">
                                <div className="account_dashboard_content">
                                    <div className="account_dashboard_content_header d-flex justify-content-between align-items-center">
                                        <div>
                                            My Lists
                                            <p>Your Total List: 2</p>
                                        </div>
                                        <Link to="/my-list-create" className="bj_theme_btn">Create New List</Link>
                                    </div>
                                    <div className="content_body">
                                        <div className="my_book_list">
                                            <Link to="/my-list-details" className="my_book_list_item my_account_book">
                                                <div className="list_item_img">
                                                    <div className="thumbnail">
                                                        <img src="assets/img/home-two/choice2.png" alt="" />
                                                    </div>
                                                    <div className="collection">
                                                        <img src="assets/img/home-two/choice3.jpg" alt="" />
                                                        <img src="assets/img/cart/best_book3.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="my_account_book_title">Fiction Book List</div>
                                                <div className="timestamp"><em>09 Oct 2024</em></div>
                                            </Link>
                                            <Link to="/my-list-details" className="my_book_list_item my_account_book">
                                                <div className="list_item_img">
                                                    <div className="thumbnail">
                                                        <img src="assets/img/cart/best_book1.jpg" alt="" />
                                                    </div>
                                                    <div className="collection">
                                                        <img src="assets/img/cart/best_book2.jpg" alt="" />
                                                        <img src="assets/img/cart/best_book3.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="my_account_book_title">Comic Book List</div>
                                                <div className="timestamp"><em>09 Oct 2024</em></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BookList; 
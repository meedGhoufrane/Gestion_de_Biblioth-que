import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BookingArea from '../components/bookingarea';
import BreadcrumbArea from '../components/breadcrumbArea';

const BookingBook: React.FC = () => {
    return (
        <div className="body_wrapper">
            <Header />
            <BreadcrumbArea />
            <section className="bj_banner_area banner_animation_03" data-bg-color="#f5f5f5">
                <div className="container">
                    <BookingArea />
                    
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BookingBook;
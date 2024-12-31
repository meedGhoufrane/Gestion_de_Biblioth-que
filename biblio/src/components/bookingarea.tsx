import React from 'react';
import ShopSidebar from './ShopSidebar';
import Books  from './books';


const BookingArea: React.FC = () => {
    return (
        <div>
            <section className="bj_shop_area sec_padding" data-bg-color="#f5f5f5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ShopSidebar />
                        </div>
                        <Books />
                    </div>
                </div>
            </section>
        </div>
    );
};
export default BookingArea;

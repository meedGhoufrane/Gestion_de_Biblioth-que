import React from 'react';
import { Link } from 'react-router-dom';

const AccountDashboardSidebar: React.FC = () => {
  return (
    <div className="col-lg-3">
      <div className="account_dashboard_sidebar">
        <div className="sidebar_widget_body d-flex account_dashboard_sidebar_profile">
          <div>
            <img src="assets/img/profile-img.png" alt="account" />
          </div>
          <div>
            <div className="greetings">Hello</div>
            <div className="name">Muaz BK</div>
          </div>
        </div>
        <div className="sidebar_widget_body p-0">
          <ul className="sidebar_widget_menu">
            <li><Link to="/profile">My Profile</Link></li>
            <li className="active"><Link to="/BookList">My List</Link></li>
            <li><Link to="/my-list-details">My List Details</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboardSidebar;
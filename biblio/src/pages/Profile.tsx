import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import AccountDashboardSidebar from "../components/AccountDashboardSidebar"
import AccountDashboardBody from "@/components/AccountDashboardBody";

function Profile() {

  return (
    <>
      <Header />
      <section className="bj_account_dashboard" data-bg-color="#f5f5f5">
        <div className="container">
          <div className="row">
          {/* <AccountDashboardSidebar/> */}
            <AccountDashboardBody/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;

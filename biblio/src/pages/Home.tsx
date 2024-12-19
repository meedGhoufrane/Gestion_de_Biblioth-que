import { useState, useEffect } from "react";

function Home() {
  const [showProfile, setShowProfile] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });

  // Fetch data from localStorage (simulating user data)
  useEffect(() => {
    const email = localStorage.getItem("email") || "Not Available";
    const name = "John Doe"; // Replace this with actual user profile name if available
    setUserData({ email, name });
  }, []);

  const handleViewProfile = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white flex flex-col justify-center items-center relative">
      {/* Page Header */}
      <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-center drop-shadow-lg">
        Welcome to Your Dashboard
      </h1>

      {/* Subtitle */}
      <p className="text-xl mb-10 text-center max-w-3xl leading-relaxed opacity-90">
        Access your features and manage your data seamlessly. Explore, update your profile, and stay productive!
      </p>

      {/* Buttons */}
      <div className="space-x-6 flex">
        {/* View Profile Button */}
        <button
          className="px-6 py-3 bg-white text-blue-600 font-bold text-lg rounded-full shadow-md hover:bg-blue-100 transform hover:-translate-y-1 transition duration-300"
          onClick={handleViewProfile}
        >
          View Profile
        </button>

        {/* Logout Button */}
        <button
          className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-600 shadow-md transform hover:-translate-y-1 transition duration-300"
          onClick={() => {
            localStorage.clear(); // Clear storage on logout
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-lg p-8 shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
            <p className="text-lg mb-2">
              <strong>Name:</strong> {userData.name}
            </p>
            <p className="text-lg mb-4">
              <strong>Email:</strong> {userData.email}
            </p>
            <button
              onClick={handleCloseProfile}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  profilePicture: string;
}

function Profile() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    profilePicture: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email") || "Not Available";
    const name = "John Doe"; 
    const profilePicture = "https://via.placeholder.com/150"; 
    setUserData({ name, email, profilePicture });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="bg-blue-500 h-32 flex justify-center items-center">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
          <p className="text-gray-600 mb-4">{userData.email}</p>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => alert("Edit Profile functionality")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

// App.js

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookingBook from './pages/bookingbook';


function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Home />
        }
      />

      <Route path="/bookingbook" Component={BookingBook} />

      <Route
        path="/profile"
        element={
          <Profile />
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
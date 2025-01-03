import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BookingBook from './pages/bookingbook';
import MyListDetails from './components/dashbaord/MyListDetails';
import BookList from './components/dashbaord/BookList';
import CreateBookList from './components/dashbaord/CreateBookList';
import UpdateBookList from './components/dashbaord/UpdateBookList';

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route path="/bookingbook" element={<BookingBook />} />
      <Route path="/booklist" element={<BookList />} />
      <Route path="/my-list-details" element={<MyListDetails />} />
      <Route path="/CreateBookList" element={<CreateBookList />} />
      <Route path="/update-book/:bookId" element={<UpdateBookList />} />
      
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
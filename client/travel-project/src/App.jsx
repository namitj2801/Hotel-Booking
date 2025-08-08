import "./App.css";
// import Navbar from "./components/Navbar.jsx";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserRoutes from "./components/routes/Private.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import YourOrder from "./pages/user/YourOrder.jsx";
import AdminRoutes from "./components/routes/Admin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import CreatePost from "./pages/admin/CreatePost.jsx";

function App() {
  return (
    <>
      {/* <div className="text-8xl">Hello world 56min 26 sec</div> */}
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />

        {/* user routing */}
        <Route path="/user" element={<UserRoutes />}>
          <Route path="" element={<UserDashboard />} />
          <Route path="your-order" element={<YourOrder />} />
        </Route>

        {/* admin routing */}
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="/admin/details" element={<AdminDashboard />} />
          <Route path="/admin/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

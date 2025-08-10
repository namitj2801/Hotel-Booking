import "./App.css";
// import Navbar from "./components/Navbar.jsx";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserRoutes from "./components/routes/Private.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import YourOrder from "./pages/YourOrder.jsx";
import AdminRoutes from "./components/routes/Admin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import CreatePost from "./pages/admin/CreatePost.jsx";
import CreateCategory from "./pages/admin/CreateCategory.jsx";
import AllPost from "./pages/admin/AllPosts.jsx";
import AllTrip from "./pages/admin/AllTrips.jsx";
import UpdatePost from "./pages/admin/UpdatePost";
import CartPage from "./pages/CartPage";
import Payment from "./pages/Payment";
import ThankYou from "./components/ThankYou";
import SelectedCategory from "./pages/SelectedCategory.jsx";
// import ContributePost from "./pages/user/ContributePost";
import AdminDetails from "./pages/admin/AdminDetails.jsx";
import Advertisement from "./components/Advertisement.jsx";
import Footer from "./components/Footer.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <>
      {/* <div className="text-8xl">Hello world 56min 26 sec</div> */}
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/category/:slug" element={<SelectedCategory />} />

        {/* user routing */}
        <Route path="/user" element={<UserRoutes />}>
          <Route path="" element={<UserDashboard />} />
          <Route path="your-order" element={<YourOrder />} />
        </Route>

        {/* admin routing */}
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="/admin/details" element={<AdminDashboard />} />
          <Route path="/admin/create-post" element={<CreatePost />} />
          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route path="/admin/all-post" element={<AllPost />} />
          <Route path="/admin/details" element={<AdminDetails />} />
          <Route path="/admin/all-booking" element={<AllTrip />} />
          <Route path="/admin/post/:slug" element={<UpdatePost />} />
        </Route>
      </Routes>
      <Advertisement />
      <Footer />
    </>
  );
}

export default App;

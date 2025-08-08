import "./App.css";
// import Navbar from "./components/Navbar.jsx";
import Navbar from "./components/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import HomePage from "./HomePage.jsx";

function App() {
  return (
    <>
      {/* <div className="text-8xl">Hello world 56min 26 sec</div> */}
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PlaceHolder from "./Pages/placeHolder";
import Footer from "./Component/Footer";
import { useState } from "react";
import Login from "./Pages/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin = {setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeholder" element={<PlaceHolder />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

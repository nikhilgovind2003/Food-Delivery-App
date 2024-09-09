import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {Route, Routes } from "react-router-dom"
import List from "./Pages/List";
import Orders from "./Pages/Orders";
import Add from "./Pages/Add";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = 'http://localhost:4000';

  return (
    <>
      <div className="">
      <ToastContainer/>
        <Navbar />
        <div className=" flex">
          <SideBar />
          <Routes>
            <Route path="/list" element={<List url = {url} />} />
            <Route path="/orders" element={<Orders url = {url} />} />
            <Route path="/add" element={<Add url = {url} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

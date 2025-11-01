import Navbar from "./Component/Navbar/Navbar";
import React from "react";
import Home from "./Component/Pages/Home";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

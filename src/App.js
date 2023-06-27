import React, { useContext } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import StyleGuide from "./pages/StyleGuide";
import Search from "./pages/Search";
import { BlogPost } from "./pages/BlogPost";
import {  AuthProvider } from "./Context/AuthContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
       <AuthProvider>
        <div className=" container m-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/admin" element={ <Admin />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/blog/:id" element={<BlogPost />}></Route>
            <Route path="*" element={<div>Error 404 page not found</div>}></Route>


          </Routes>
        </div>
        
        <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

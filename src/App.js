import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import StyleGuide from "./pages/StyleGuide";
import Search from "./pages/Search";
import { BlogPost } from "./pages/BlogPost";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  // useEffect(() => {
  //   const cleanup = (event) => {
  //     if (
  //       localStorage.getItem("remember") || event.currentTarget.performance.navigation.type === 1
  //       //  || event.currentTarget.performance.navigation.type === 0
  //     ) {
  //       // Page is being reloaded, prevent removal from localStorage
  //       event.preventDefault();
  //       return; // Exit the function without removing the item
  //     }
  //     localStorage.removeItem("isLoggedIn");
  //   };
  //   window.addEventListener("beforeunload", cleanup);

  //   return () => {
  //     window.removeEventListener("beforeunload", cleanup);
  //   };
  // }, []);

  // On every time app loads it will check theme prefference from localstorage
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <div className=" container m-auto dark:bg-black">
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/blog/:id" element={<BlogPost />}></Route>
              <Route
                path="*"
                element={<div>Error 404 page not found</div>}
              ></Route>
            </Routes>
          </div>

          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

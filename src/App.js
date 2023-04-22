import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/india" element={<h1>hello guys</h1>} /> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/post/:category" element={<Post/>}/>
          <Route path="*" element={<h1>Page not found 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

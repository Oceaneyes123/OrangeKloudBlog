import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/myBlogs" element={<UserBlogs/>} />
          <Route path="/blogs/add" element={<AddBlog/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

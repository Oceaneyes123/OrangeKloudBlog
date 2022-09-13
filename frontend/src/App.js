import Header from "./components/Header";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store";

function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn)
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(authAction.login())
    }
  }, [dispatch])
  
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
        { !isLoggedIn ?  <Route path="/login" element={<Login/>} /> :
        <>
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/myBlogs" element={<UserBlogs/>} />
          <Route path="/blogs/add" element={<AddBlog/>} /> 
        </> 
          }
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

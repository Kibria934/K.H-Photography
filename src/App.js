import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/SharedPage/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home.js";
import SignIn from "./components/AuthPage/SignIn/SignIn";
import SignUp from "./components/AuthPage/SignUp/SignUp";
import About from "./components/SecondPage/About/About";
import Blog from "./components/SecondPage/Blog/Blog";
import Services from "./components/HomePage/ServicesPage/Services";
import CheckOut from "./components/SecondPage/CheckOut/CheckOut";
import { createContext, useEffect, useState } from "react";

export const MyAllDataContex = createContext();
function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [2]);
  return (
    <div className="w-100 px-4 mx-auto">
      <Header></Header>
      <MyAllDataContex.Provider value={[services, setServices]}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/service" element={<Services></Services>}></Route>
          <Route path="/:Id" element={<CheckOut></CheckOut>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </MyAllDataContex.Provider>
    </div>
  );
}

export default App;

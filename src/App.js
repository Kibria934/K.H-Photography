import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/SharedPage/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home.js";
import SignIn from "./components/AuthPage/SignIn/SignIn";
import SignUp from "./components/AuthPage/SignUp/SignUp";
import About from "./components/SecondPage/About/About";
import Services from "./components/HomePage/ServicesPage/Services";
import CheckOut from "./components/SecondPage/CheckOut/CheckOut";
import { createContext, useEffect, useState } from "react";
import Footer from "./components/SharedPage/Footer/Footer";
import RequireAuth from "./components/AuthPage/RequireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Blogs from "./components/SecondPage/Blogs/Blogs";
import Nothing from "./components/SharedPage/Nothing/Nothing";

export const MyAllDataContex = createContext();

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="w-100 px-4 mx-auto">
      <MyAllDataContex.Provider
        value={[services, setServices, auth, user, loading, error]}
      >
        <Header name={user && user.displayName}></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Services></Services>}></Route>
          <Route
            path="/service/:Id"
            element={
              <RequireAuth>
                <CheckOut data={services}></CheckOut>
              </RequireAuth>
            }
          ></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<Nothing></Nothing>}></Route>
        </Routes>
      </MyAllDataContex.Provider>
    </div>
  );
}

export default App;

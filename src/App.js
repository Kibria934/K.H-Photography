import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/SharedPage/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home.js";
import SignIn from "./components/AuthPage/SignIn/SignIn";
import SignUp from "./components/AuthPage/SignUp/SignUp";
import About from "./components/SecondPage/About/About";
import Blog from "./components/SecondPage/Blog/Blog";

function App() {
  return (
    <div className="w-100 px-4 mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;

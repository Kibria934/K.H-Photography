import React from "react";
import Banner from "../Banner/Banner";
import Service from "../ServiceSection/Service";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="text-center m-3 name-plate fs-2">KIBRIA HOSSAIN</div>
      <Banner></Banner>
      <Service></Service>
    </div>
  );
};

export default Home;

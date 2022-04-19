import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MyAllDataContex } from "../../../App";
import auth from "../../../firebase.init";
import Banner from "../Banner/Banner";
import Services from "../ServicesPage/Services";
import "./Home.css";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  // const [details, setDetails] = useState([]);
  if (loading) {
    <p>loading..</p>;
  }
  const [services, setServices] = useContext(MyAllDataContex);
  return (
    <div>
      <div className="text-center m-3 name-plate fs-2">KIBRIA HOSSAIN</div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;

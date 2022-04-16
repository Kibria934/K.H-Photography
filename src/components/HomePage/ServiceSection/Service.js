import React, { useEffect, useState } from "react";
import "./Service.css";
const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return <div>{services.map((service) => <Sevice></Sevice>)}</div>;
};

export default Service;

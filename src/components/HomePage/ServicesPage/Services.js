import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAllDataContex } from "../../../App.js";
import ServiceCard from "../ServiceCard/ServiceCard.js";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useContext(MyAllDataContex);
  return (
    <div>
      <h2 className="text-center mb-3 mt-4">Service (Album)</h2>
      <div className="services-container">
        {services.map((card) => (
          <ServiceCard key={card.id} card={card}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

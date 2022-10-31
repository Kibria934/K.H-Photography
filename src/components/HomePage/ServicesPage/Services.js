import React, { Suspense, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAllDataContex } from "../../../App.js";
import "./Services.css";
const ServiceCard = React.lazy(() => import("../ServiceCard/ServiceCard.js"));

const Services = () => {
  const [services, setServices] = useContext(MyAllDataContex);
  return (
    <div>
      <Suspense fallback={<h1>Loading ....</h1>}>
        {" "}
        <h2 className="text-center mb-3 mt-4">Service (Album)</h2>
        <div className="services-container">
          {services.map((card) => (
            <ServiceCard key={card.id} card={card}></ServiceCard>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Services;

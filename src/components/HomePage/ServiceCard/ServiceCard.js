import React, { useContext, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MyAllDataContex, myAllDataContex } from "../../../App";
import "./ServiceCard.css";

const ServiceCard = ({ card }) => {
  // console.log(card.name);
  const { name, img, price, description, id } = card;
  const navigate = useNavigate();
  const [services] = useContext(MyAllDataContex);
  const param = useParams();
  console.log(card);
  return (
    <div>
      <div className="w-100 card-box">
        <div className="img-box">
          <img className="w-100 rounded-3" src={img} alt="" />
        </div>
        <div>
          <h4>{name}</h4>
          <h4>Price: ${price}</h4>
          <p>{description}</p>
          <Link className="btn btn-dark fs-6 fw-bold" to={"/" + id}>
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

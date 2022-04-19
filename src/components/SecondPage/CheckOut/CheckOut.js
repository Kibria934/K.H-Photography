import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAllDataContex } from "../../../App";

const CheckOut = () => {
  let param = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const single = details?.find((card) => card.id == param.Id);

  return (
    <div>
      <div className="container d-flex mt-2 rounded-3">
        <div>
          <img
            className="rounded-3"
            width={"100%"}
            height={"850px"}
            src={single && single.img}
            alt=""
          />
        </div>
        <div>
          <h2>{single?.name}</h2>
          <h3>{single ? `$ ${single.price}` : ""}</h3>
          <h4 className="text-success">{single?.catagory}</h4>
          <p>{single?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

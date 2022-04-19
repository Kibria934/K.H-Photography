import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAllDataContex } from "../../../App";

const CheckOut = ({ data }) => {
  console.log(data);
  let param = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    fetch(data).then(setDetails(data));
    // fetch("services.json")
    //   .then((res) => res.json())
    //   .then((data) => setDetails(data));
  }, []);
  const single = details?.find((card) => card.id == param.Id);

  return (
    <div>
      <div className="container d-flex mt-2 rounded-3">
        <div className="w-100">
          <img
            className="rounded-3"
            width={"100%"}
            height={"850px"}
            src={single && single.img}
            alt=""
          />
        </div>
        <div
          style={{ height: "80vh", width: "100%" }}
          className=" d-flex flex-column ms-2 justify-content-center "
        >
          <h2>{single?.name}</h2>
          <h3>{single ? `$ ${single.price}` : ""}</h3>
          <h4 className="text-success">{single?.catagory}</h4>
          <p>{single?.description}</p>
          <div>
            <h4>More Photo:</h4>
            <div className="w-100 d-flex flex-wrap">
              <img
                width={"150px"}
                height={"120px"}
                style={{ marginLeft: "1.5px" }}
                src={
                  "https://expertphotography.b-cdn.net/wp-content/uploads/2019/11/Nature-Photographer-Marco-Grassi.png"
                }
                alt=""
              />
              <img
                width={"150px"}
                height={"120px"}
                margin={"1.5px"}
                src={
                  "https://www.namesnack.com/images/namesnack-nature-photography-business-names-4764x3176-20200916.jpeg?crop=21:16,smart&width=420&dpr=2"
                }
                alt=""
              />
              <img
                width={"150px"}
                height={"120px"}
                margin={"1.5px"}
                src={
                  "https://expertphotography.b-cdn.net/wp-content/uploads/2019/09/Types-of-landscape-02.jpg"
                }
                alt=""
              />
              <img
                width={"150px"}
                height={"120px"}
                style={{ marginLeft: "1.5px" }}
                src={
                  "https://www.photographytalk.com/images/articles/2018/04/04/articles/2017_8/amber_fite_photography-1.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

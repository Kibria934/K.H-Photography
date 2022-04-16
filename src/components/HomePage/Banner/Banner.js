import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ width: "700px", height: "85vh" }}
          className="d-block mx-auto"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "700px", height: "85vh" }}
          className="d-block mx-auto"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "700px", height: "85vh" }}
          className="d-block mx-auto "
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
<h1>This is banner</h1>;

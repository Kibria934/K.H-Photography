import React from "react";
import notFound from "../../../images/banner/not found.jpg";
const Nothing = () => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "100vh",
        }}
        src={notFound}
        alt=""
      />
    </div>
  );
};

export default Nothing;

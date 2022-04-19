import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="d-flex footer-area align-items-center justify-content-between">
        <div>
          <h1>K.H Photography</h1>
          <p>This is Photograpy side </p>
        </div>
        <div className="mt-2">
          <p>Address:</p>
          <p>Bangladesh,Dhaka</p>
          <p>Phone: 000000000</p>
          <p>abc@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-primary">
        All right resarve K.H photography.copyright &copy; 2022
      </p>
    </div>
  );
};

export default Footer;

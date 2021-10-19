import React from "react";
import './Footer.css'
import img from '../../image/Logo.png'

const Footer = () => {
  return (
    <div className="footer row p-5  mt-5">
      <div className="col-md-6 col-sm-12">
        <h4 className="text-primary"><img src={img} alt="" width="10%"/> Availl Hospital </h4>
        <br />
        <p>Email: availlhospital@gmail.com</p>
        <p>Address: D-21-20F-224 </p>
        <p>Phone: 100-215-220 </p>
        <br />
      </div>
      <div className="col-md-6 col-sm-12">
      <div className="row d-flex">
        <h4>
          <a href="">Our Services</a> <br /><br />

        </h4>
        <div className="col-md-6 col-sm-12">
          <a href="">C-Arm OT</a><br />
          <a href=""> Physiotherapy</a><br />
          <a href="">24hrs Ambulance</a> <br />
          <a href="">24hrs Pharmacy</a> <br />
          <a href=""> Post Operative Ward</a> <br />
        </div>
        <div className="col-md-6 col-sm-12">
          <a href=""> Emergency</a> <br />
          <a href=""> Orthopedics</a><br />
          <a href=""> ECG</a> <br />
          <a href=""> Ultrasonography</a> <br />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;

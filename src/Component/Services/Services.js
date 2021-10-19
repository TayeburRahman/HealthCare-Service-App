import React from "react";
import { useEffect, useState } from "react";
import Ourservice from "../Ourservice/Ourservice";
import "./service.css";
import { BiArrowFromLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const ScService = services.slice(0, 6);
  console.log("service", services);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container ">
      <div id="Ourservice  d-flex" id="services">
        <h2 className="text-survices mt-5 mb-4">Our Services</h2>
        <div className="service-container row gap-3">
          {ScService.map((service) => (
            <Ourservice key={service.key} service={service}></Ourservice>
          ))}
        </div>
        <div className="d-flex div-button">
          <Link className="survicecartbtn" to="/allService">
            See More <BiArrowFromLeft />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

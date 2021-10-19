import React from "react";
import useServices from "../../Hooks/useServices";
import Ourservice from "./Ourservice";

const Services = () => {
  const { services } = useServices();

  return (
    <div id="Ourservice">
      <h2 className="text-primary mt-5 mb-4">Our Services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Ourservice key={service.key} service={service}></Ourservice>
        ))}
      </div>
    </div>
  );
};

export default Services;

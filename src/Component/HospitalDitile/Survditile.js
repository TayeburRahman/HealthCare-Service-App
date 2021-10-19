import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ditile.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Survditile = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState({});

  useEffect(() => {
    fetch("https://mocki.io/v1/9f075673-a262-4f53-bd15-d8c4b7278684")
      .then((res) => res.json())
      .then((data) => setServices(data.find((data) => data.key === serviceId)));
  }, [serviceId]);

  console.log("tayeb", services);
  return (
    <div className="">
      <div className="service-slider row">
        <div className="col-md-6 col-sm-12 p-5">
          <h1 className="p-1 ourSurvice ">Our Service</h1>
          <h6></h6>
          <h6>
            <AiOutlineMail /> aviailhptl321@gmail.com
          </h6>
          <h6>
            <AiOutlinePhone /> aviailhptl321@gmail.com
          </h6>
        </div>
        <div className="col-md-6 col-sm-12"></div>
      </div>
      <div className="container">
        <div className="mt-5 mb-5">
          <h2 className=" text-title rounded p-4 ">{services.title}</h2>
        </div>
        <div className="mt-5  row">
          <div className="col-md-6 col-sm-12 ps-5 p-5">
            <img src={services.url} width="100%" alt="" />
            <br />
            <br />
            <h5 className=" ">{services.ditels}</h5>
          </div>
          <div className="col-md-6 col-sm-12 ps-5 pe-5 mt-5 text-dtl">
            <p>{services.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survditile;

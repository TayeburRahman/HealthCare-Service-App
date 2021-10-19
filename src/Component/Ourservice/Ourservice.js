import React from "react";
import "./Ourservice.css";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Ourservice = (props) => {
  const { url, title, ditels, key } = props.service;
  return (
    <div class="card col-md-3 p-3">
      <img src={url} class="card-img-top mt-2" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> {title}</h5>
        <p class="card-text">{ditels}.</p>
        <Link to={`/depertmentDitiel/${key}`}>
          <a class="btn serviceBtn  btn-outline-danger Submit-buttonsP">
            Services Details <BiChevronsRight />{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Ourservice;

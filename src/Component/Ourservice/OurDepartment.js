import React from "react";

const OurDepartment = (props) => {
  const { url, department, ditels } = props.deperment;
  return (
    <div className="card col-md-2 col-sm- 12">
      <img src={url} className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {department}</h5>
        <p className="card-text">{ditels}.</p>
      </div>
    </div>
  );
};

export default OurDepartment;

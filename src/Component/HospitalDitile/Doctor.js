import React from "react";
import useDeperment from "../../Hooks/useDeperment";

const Doctor = () => {
  const { deperments } = useDeperment();
  console.log(deperments);
  return (
    <div className="">
      {deperments.map((deperment) => (
        <div class="card col-md-10 mb-4">
          <img
            src={deperment.dimg}
            class="card-img-top mt-2"
            width="90%"
            alt="..."
          />
          <div class="card-body">
            <h4>{deperment.doctorname}</h4>
            <h6 class="card-title"> {deperment.dsatifiket}</h6>
            <p class="card-text">{deperment.dstudy}.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctor;

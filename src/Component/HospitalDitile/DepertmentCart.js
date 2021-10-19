import React from "react";
import useDeperment from "../../Hooks/useDeperment";
import { BiChevronsRight } from "react-icons/bi";

const DepertmentCart = () => {
  const { deperments } = useDeperment([]);
  console.log("tayebs", deperments);
  return (
    <div className="row p-3 gap-2 depermentscart  d-flex">
      {deperments.map((deperment) => (
        <div class="card col-md-3  ">
          <img src={deperment.url} class="card-img-top mt-2" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> {deperment.department}</h5>
            <p class="card-title"> {deperment.ditels}</p>

            <a class="btn serviceBtn  btn-outline-success Submit-buttonsP">
              Services Details <BiChevronsRight />{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepertmentCart;

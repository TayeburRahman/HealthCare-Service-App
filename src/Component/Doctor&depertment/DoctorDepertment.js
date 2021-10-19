import React from "react";
import DepertmentCart from "../HospitalDitile/DepertmentCart";
import Doctor from "../HospitalDitile/Doctor";
import AllService from "../Services/AllService";

const DoctorDepertment = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-9 col-sm-12">
          <div>
            <div className=" ps-5 mt-3 mb-3">
                <hr />
              <h1 className="">Department</h1><br />
              <h6 className="ps-5">Emergency, General Surgery, Laparoscopic Surgery, Operation TheatreOT, Dental Surgery, <br /> Ear Nose Throat ENT, Medicine, Plastic & Cosmetic Surgery</h6><br />
              <hr />
            </div>
            <DepertmentCart></DepertmentCart>
          </div>
          <div>
            <AllService></AllService>
          </div>
        </div>
        <div className="col-md-3 text-lefts col-sm-12 gap-5">
            <h4 className="pt-5">Doctor</h4>
            <h6 className="pb-5">Personal Attributes Every Doctor <br /> Should Possess</h6>
          <Doctor></Doctor>
        </div>
      </div>
    </div>
  );
};
export default DoctorDepertment;

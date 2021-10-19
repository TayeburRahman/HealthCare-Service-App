import React from "react";
import img from '../../image/D43.jpg'
import './about.css'

const AboutFastPart = () => {
  return (
    <div className="row p-4 pt-5">
        <hr />
         
      <div className="col-md-6 col-sm-12">
          <br /><br />
          <img src={img} alt="" width="90%" />
      </div>
      <div className="col-md-6 col-sm-12 about-fst-text-right-site mb-3 pb-4">
      <h3 className="text-btn-secondary ps-4">As Regards</h3>
        <p className="about-fst-text p-3">
          Unlike other home care agencies, Shower Power was formed with the sole
          purpose of providing companionship to elderly patients along with
          professional home care. Shower Power consists of talented,
          experienced, and compassionate individuals who not only provide
          complete nursing services but offer emotional support to patients as
          well. Our goal is to ensure the health and safety of elderly patients
          with specialized nursing services to help them in day-to-day
          activities. We strive to make your home a safe place where you can
          find the right living assistance with the help of Shower Power. At
          Shower Power, we understand the needs and requirements of elderly
          patients; therefore, we follow a unique care plan for all of them. An
          individualized home care plan allows us to meet the specific needs of
          the patients and offer them support in the best possible way. The
          experts in our team are trained to offer one-on-one attention to
          patients to make sure they feel connected to them. At Shower Power,
          our focus is on developing a strong relationship with our patients to
          make sure that they feel looked after at all times. Our professional
          home care services come with a touch of personalization so the
          caregiver and the patient are on the same page.{" "}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default AboutFastPart;

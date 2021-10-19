import React from "react";
import img from "../../image/hospital.png";
import img1 from "../../image/AboutUs.jpg";
import img2 from "../../image/slide-2.jpg";
import AboutFastPart from "./AboutFastPart";

const About = () => {
  return (
    <div>
      <div className="pt-4">
        <img src={img1} width="90%" alt="" />
      </div>
      <div className="row pt-5 p-5 ">
        <h3 className="text-survie">
          {" "}
          A hospital is a health care institution providing patient treatment
          with specialized medical and nursing staff and medical equipment. The
          best-known type of hospital is the general hospital
        </h3>
        <div className="col-md-7 col-sm-12">
          <p>
            The best-known type of hospital is the general hospital, which
            typically has an emergency department to treat urgent health
            problems ranging from fire and accident victims to a sudden illness.
            A district hospital typically is the major health care facility in
            its region, with many beds for intensive care and additional beds
            for patients who need long-term care. Specialized hospitals include
            trauma centers, rehabilitation hospitals, children's hospitals,
            seniors' (geriatric) hospitals, and hospitals for dealing with
            specific medical needs such as psychiatric treatment (see
            psychiatric hospital) and certain disease categories. Specialized
            hospitals can help reduce health care costs compared to general
            hospitals.[2] Hospitals are classified as general, specialty, or
            government depending on the sources of income received. A teaching
            hospital combines assistance to people with teaching to medical
            students and nurses. A medical facility smaller than a hospital is
            generally called a clinic. Hospitals have a range of departments
            (e.g. surgery and urgent care) and specialist units such as
            cardiology. Some hospitals have outpatient departments and some have
            chronic treatment units. Common support units include a pharmacy,
            pathology, and radiology. Hospitals are typically funded by public
            funding, health organisations (for-profit or nonprofit), health
            insurance companies, or charities,including direct charitable donations. Historically, hospitals were often founded and funded by
          </p>
        </div>
        <div className="col-md-5 col-sm-12">
          <img src={img} alt="" width="70%" />
        </div>
        <p>
           
            religious orders, or by charitable
          individuals and leaders. Currently, hospitals are largely staffed
          Currently, hospitals Currently, hospitals are largely staffed by
          professional physicians, surgeons, nurses, and allied health
          practitioners, whereas in the past, this work was usually performed by
          the members of founding religious orders or by volunteers. However,
          there are various Catholic religious orders, such as the Alexians and
          the Bon Secours Sisters that still focus on hospital ministry in the
          late 1990s, as well as several other Christian denominations,
          including the Methodists and Lutherans, which run hospitals.[4] In
          accordance with the original meaning of the word, hospitals were
          original "places of hospitality", and this meaning is still preserved
          in the names of some institutions such as the Royal Hospital Chelsea,
          established in 1681 as a retirement and nursing home for veteran
          soldiers.
        </p>
      </div>
      <div className="container">
        <h2>How to boost your vitamin D levels this winter</h2>
        <p className="text-survie">
          As we enter the winter months the loss of sunshine reduces our bodies'
          production of vitamin D and poses a health risk to everyone in the UK.
          But what happens to our vitamin D levels during winter, and how can we
          support our health by boosting them until the sunshine returns?
        </p>
        <img src={img2} alt="" width="70%" />
      </div>
      <div>
          <AboutFastPart></AboutFastPart>
      </div>
    </div>
  );
};

export default About;

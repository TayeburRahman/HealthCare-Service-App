import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../image/img4.jpg";
import img2 from "../../image/img1.jpg";
import img3 from "../../image/slide-2.jpg";

const Slider = () => {
  return (
    <div className="mt-1">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="First slide"
            width="60%"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />

          <Carousel.Caption className=" ">
            <h3 className="text-danger">Intensive care unit (ICU)</h3>

            <h6 className="text-dark">
              An intensive care unit (ICU), also known as an critical care unit
              (CCU).
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Third slide" />

          <Carousel.Caption className=" ">
            <h3 className="text-danger">Orthopedics</h3>
            <h6 className="text-dark">
              Orthopaedic surgery or orthopaedics, is the branch of surgery
              concerned the musculoskeletal system.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

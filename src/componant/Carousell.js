import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logoOne from "../Photos/logoOne.png";
import logoTwo from "../Photos/logoTwo.png";

const Carousell = ()=> {
  
    return (
      <div >
        <Carousel className="carousell">
          <Carousel.Item>
            <img className="d-block bg-danger " src={logoOne} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block bg-danger " src={logoTwo} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  
}

export default Carousell;

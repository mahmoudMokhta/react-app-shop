import React, { Component } from "react";
import { Container } from "react-bootstrap";
import imgEnd1 from "../Photos/fifth1.jpg";
import imgEnd2 from "../Photos/fifth2.jpg";
import imgEnd3 from "../Photos/fifth3.jpg";
import imgEnd4 from "../Photos/fifth4.jpg";
import imgEnd5 from "../Photos/fifth5.jpg";
import imgEnd6 from "../Photos/fifth6.jpg";

class EndHome extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Container>
          <div className="d-flex align-items-center flex-sm-column flex-lg-row ">
            <div  className="d-flex w-50 w-sm-100">
              <img className="w-50 w-sm-100" src={imgEnd1} alt="imgEnd" />
              <img className="w-50 w-sm-100" src={imgEnd2} alt="imgEnd" />
            </div>
            <h1 className="text-white ps-4 ">Vintage Style</h1>
          </div>
          <div className="d-flex align-items-center flex-sm-column flex-lg-row ">
            <div  className="d-flex w-50 w-sm-100 ">
              <img className="w-50 w-sm-100" src={imgEnd3} alt="imgEnd" />
              <img className="w-50 w-sm-100" src={imgEnd4} alt="imgEnd" />
            </div>
            <p className="text-white ps-4 w-50 " >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus aliquam ipsam dolore, aliquid expedita necessitatibus
              optio voluptates, ratione harum corporis beatae asperiores nostrum
              provident mollitia repellendus commodi quis neque quia
            </p>
          </div>
          <div className="d-flex align-items-center flex-sm-column flex-lg-row ">
            <div  className="d-flex w-50">
              <img className="w-50 w-sm-100" src={imgEnd5} alt="imgEnd" />
              <img className="w-50 w-sm-100" src={imgEnd6} alt="imgEnd" />
            </div>
            <h1 className="text-white ps-4 ">#Lusiontheme</h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default EndHome;

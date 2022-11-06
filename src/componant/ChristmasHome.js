import React from "react";
import { Container, Button } from "react-bootstrap";
import imageChris from "../Photos/f1.png";
import { NavLink } from "react-router-dom";
import "../style/style.css";

const ChristmasHome = ()=> {
 
    return (
      <div className="bg-dark ChristmasHome ">
        <Container className="d-flex justify-content-between p-3 ">
          <div className="bg-warning rounded ChristmasHomeHead ">
            <div
              src={imageChris}
              alt="imageChris "
              className="imageChris d-flex align-items-end justify-content-center text-center   "
            >
              <div className="p-5">
                <h1 className="display-2">MERRY</h1>
                <h1>Chirstmax 40% off</h1>
                <Button variant="outline-dark" as={NavLink} to="/shop">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
          <div style={{ width: "18rem" }} className="bg-warning rounded d-flex flex-column align-items-center justify-content-around text-center ChristmasHomeFo ">
            <h1 className="display-2">Your Next</h1>
            <h1>Purachase 10% off</h1>
            <Button variant="outline-dark" as={ NavLink } to = "/shop">
              Shop Now
            </Button>
          </div>
        </Container>
      </div>
    );
  }


export default ChristmasHome;

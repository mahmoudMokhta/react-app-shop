import React, { Component } from "react";
import { Container, Badge, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

class Naav extends Component {
  render() {
    return (
      <Navbar className="sticky-md-top" bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand >Lusion</Navbar.Brand>  
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll>
              <Nav.Link className="me-2  " as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link  as={NavLink} to="/shop">
                Shop
              </Nav.Link>
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link  as={NavLink} to="/Cart">
                <BsFillCartPlusFill  />
                <sup>
                  <Badge bg={this.props.productCartLength> 0 ? "success": 'danger'}>{this.props.productCartLength}</Badge>
                </sup>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Naav;

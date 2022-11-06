import React from "react";
import { Card, Container } from "react-bootstrap";

const CardsHome = (props)=> {
 
    return (
      <div className="bg-dark  ">
        <Container className="d-flex justify-content-around flex-wrap ">
          {props.products.map((e) => (
            <Card style={{ width: "18rem" }} className='my-3 ' key={e.id}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Title>Items : {e.items}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    );
  
}

export default CardsHome;

import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "../style/style.css";
import { FaRegPlusSquare, FaRegMinusSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  return (
    <div className="cart-page bg-dark">
      {props.productCart.length === 0 ? (
        <h1 className="text-white text-center pt-5 "> Your Cart Is Impty</h1>
      ) : (
        <Container className="d-flex justify-content-around flex-wrap">
          {props.productCart.map((e) => (
            <Card style={{ width: "18rem" }} className="my-3 " key={e.id}>
              <Card.Img variant="top" src={e.imgShop} />
              <Card.Body>
                <Card.Text>{e.type}</Card.Text>
                <Card.Title>{e.price} $</Card.Title>
                <Card.Title className={e.Available > 0 ? "text-success" :"text-danger"}>
                  IN stock : {e.Available}
                </Card.Title>
                <Card.Title >
                  Count : {e.count}
                </Card.Title>

                <div className="d-flex justify-content-around">
                  <FaRegPlusSquare
                    onClick={() => props.increment(e)}
                    className="text-success cursor fs-4"
                  />
                  <FaRegMinusSquare
                    onClick={() => props.decrement(e)}
                    className="text-warning fs-4 cursor"
                  />
                  <FaTrash
                    onClick={() => props.delete(e)}
                    className="text-danger fs-4 cursor"
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    <div className="d-flex justify-content-center ">
      <div className="d-flex p-4">
     
      <h2 className="text-light">Total price : {props.getTotal}</h2>

      </div>
    </div>
      <div className="d-flex justify-content-center p-5 "><Button as={NavLink} to="/shop" variant="outline-light me-2">Continue Shop</Button></div>
    </div>
  );
};

export default Cart;

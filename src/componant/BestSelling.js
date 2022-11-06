import React from 'react'
import { Card, Container , Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

 const BestSelling = (props)=> {
  
    return (
        
        <div className='bg-dark'>
        <h1  className='text-white text-center p-3'>Best Selling</h1>
          <Container  className="d-flex justify-content-around flex-wrap ">
        {props.BestSell.map((e)=>(
          <Card style={{ width: "18rem" }} className='my-3 ' key={e.id}>
          <Card.Img variant="top" src={e.img} />
          <Card.Body>
          <Card.Text>Qulited Gilet With Hood</Card.Text>
          <Card.Text>{e.price}</Card.Text>
          <Button  variant="outline-dark" as={NavLink} to="/shop">Shop Now</Button>
          </Card.Body>
        </Card>
        ))}
           
      
</Container>
      </div>
    )
  
}


export default BestSelling

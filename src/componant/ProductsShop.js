import React from 'react'
import { Card, Container } from "react-bootstrap";
import { BsFillCartPlusFill } from "react-icons/bs";
import '../style/style.css' 


 const ProductsShop =(props)=>  {
 
    return (
      <div className='bg-dark'>

      <Container  className="d-flex justify-content-around flex-wrap">
        {props.productShop.map((e)=>(
            <Card style={{ width: "18rem" }} className='my-3 ' key={e.id}>
            <Card.Img variant="top" src={e.imgShop} />
            <Card.Body>
            <Card.Text>{e.type}</Card.Text>
              <Card.Title>{e.price} $</Card.Title>
              <Card.Title className='text-success'>Avelibale : {e.Avelibale}</Card.Title>
              <span className='d-flex justify-content-end ' >

              <BsFillCartPlusFill onClick={()=>props.addToCart(e)}  className=' btn-cart fs-2 rounded button p-1' />
              </span>
            </Card.Body>
            
          </Card>
        ))}
      </Container>
      </div>

    )
  }



export default ProductsShop

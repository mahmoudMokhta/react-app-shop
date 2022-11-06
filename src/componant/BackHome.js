import React from 'react'
import { NavLink } from "react-router-dom";
import {  Button } from "react-bootstrap";

 const BackHome = ()=> {
  
    return (
      <div className='d-flex justify-content-center bg-dark p-5'>
        <Button variant="outline-light" as={NavLink} to="/">Back Home</Button>
      </div>
    )
  }

export default BackHome

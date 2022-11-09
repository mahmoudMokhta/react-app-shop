import React, { useState } from "react";
import { Routes } from "react-router-dom";
import Naav from "./componant/Naav";
import { Route } from "react-router-dom";
import Home from "./componant/Home";
import Shop from "./componant/Shop";
import Cart from "./componant/Cart";
import imgShop1 from "./Photos/shopC1.jpg";
import imgShop2 from "./Photos/shopC2.jpg";
import imgShop3 from "./Photos/shopC3.jpg";
import imgShop4 from "./Photos/shopC4.jpg";
import imgShop5 from "./Photos/shopC5.jpg";
import imgShop6 from "./Photos/shopC6.jpg";
import imgShop7 from "./Photos/shopC7.jpg";
import imgShop8 from "./Photos/shopC8.jpg";

const App = () => {
  const [productShop] = useState([
    { id: 1, price: 100.0, Available: 20, type: "Hood", imgShop: imgShop1 },
    { id: 2, price: 120.0, Available: 5, type: "Shirt", imgShop: imgShop2 },
    { id: 3, price: 150.0, Available: 8, type: "Shirt", imgShop: imgShop3 },
    { id: 4, price: 210.0, Available: 9, type: "Shirt", imgShop: imgShop4 },
    { id: 5, price: 200.0, Available: 15, type: "Shirt", imgShop: imgShop5 },
    { id: 6, price: 250.0, Available: 11, type: "Shirt", imgShop: imgShop6 },
    { id: 7, price: 300.0, Available: 16, type: "jeans", imgShop: imgShop7 },
    { id: 8, price: 400.0, Available: 3, type: "jeans", imgShop: imgShop8 },
  ]);
  const [productCart, setProductCart] = useState([]);
  

  // function addToCart
  let addToCart = (obj) => {
    let check = productCart.some((e) => {
      return obj.id === e.id;
    });
    if (check) {
      obj.count++;
      setProductCart([...productCart]);
    } else {
      obj.count = 1;
      setProductCart([...productCart, obj]);
    }
  };
  // function increment
  let increment = (obj) => {
    // productCart = productCart.map((e) => {
    if (obj.Available > 0) {
      obj.Available--;
      obj.count++;
    }
    return setProductCart([...productCart]);
  };

  // function decrement

  let decrement = (obj) => {
    if (obj.count > 1) {
      obj.Available++;
      obj.count--;
    }
    return setProductCart([...productCart]);
  };
  const myDelete = (obj) => {
   
console.log(obj)
let newProductCart = productCart.filter(e =>{

if (e.id !== obj.id) {
    
    return e
  }  
})
setProductCart([...newProductCart]);
  };

  

    
   let getTotal = productCart.length > 0  ? productCart.map(e=> e.count*e.price).reduce((z,x)=> z+x) : 0
   
  

  return (
    <div>
      <Naav productCartLength={productCart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop productShop={productShop} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              productCart={productCart}
              increment={increment}
              decrement={decrement}
              delete={myDelete}
              getTotal={getTotal}
             
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

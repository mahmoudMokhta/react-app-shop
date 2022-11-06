import React, { Component } from "react";
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

class App extends Component {
  state = {
    productShop: [
      { id: 1, price: 100.0, Avelibale: 20, type: "Hood", imgShop: imgShop1 },
      { id: 2, price: 120.0, Avelibale: 5, type: "Shirt", imgShop: imgShop2 },
      { id: 3, price: 150.0, Avelibale: 8, type: "Shirt", imgShop: imgShop3 },
      { id: 4, price: 210.0, Avelibale: 9, type: "Shirt", imgShop: imgShop4 },
      { id: 5, price: 200.0, Avelibale: 15, type: "Shirt", imgShop: imgShop5 },
      { id: 6, price: 250.0, Avelibale: 11, type: "Shirt", imgShop: imgShop6 },
      { id: 7, price: 300.0, Avelibale: 16, type: "jeans", imgShop: imgShop7 },
      { id: 8, price: 400.0, Avelibale: 3, type: "jeans", imgShop: imgShop8 },
    ],
    productCart: [],
    totalPrice: 0,
  };

  // function addToCart
  addToCart = (obj) => {
    // clone
    let productShop = this.state.productShop;
    let productCart = this.state.productCart;

    // update
    productShop.map((e) => {
      if (obj === e) {
        productCart.push(obj);
        e.count = 1;
        console.log(productCart);
      }
      return productCart;
    });

    // setState
    this.setState({ productCart });
    return productCart;
  };
  // function increment
  increment = (obj) => {
    // clone

    let productCart = this.state.productCart;
    // update
    productCart = productCart.map((e) => {
      if (obj.id === e.id && e.Avelibale > 0) {
        e.Avelibale--;
        e.count++;
      }
      return e;
    });
    // setState
    this.setState({ productCart });
    return productCart;
  };

  // function decrement

  decrement = (obj) => {
    // clone

    let productCart = this.state.productCart;
    // update
    productCart = productCart.map((e) => {
      if (obj.id === e.id && e.count > 1) {
        e.Avelibale++;
        e.count--;
      }
      return e;
    });
    // setState
    this.setState({ productCart });
  };
  // function delete

  delete = (obj) => {
    // clone

    let productCart = this.state.productCart;
    // update
    productCart = productCart.filter((e) => {
      if (obj.id !== e.id) {
        return e;
      }
    });
    // setState
    this.setState({ productCart });
  };

  getTotal = () => {
    // clone

    let productCart = this.state.productCart;
    let totalPrice = this.state.totalPrice;
    // update
    let productCartPrice = productCart.map((e) => {
      return e.price;
    });

    productCartPrice.reduce((a, b) => {
      if (productCart.length === 1) {
        return (totalPrice = a);
      } else {
        return (totalPrice = a + b);
      }
    });

    // setState
    this.setState({ totalPrice });
  };

  render() {
    return (
      <div>
        <Naav productCartLength={this.state.productCart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop productShop={this.state.productShop} addToCart={this.addToCart}/>}
          />
          <Route
            path="/cart"
            element={
              <Cart
                productCart={this.state.productCart}
                increment={this.increment}
                decrement={this.decrement}
                delete={this.delete}
                getTotal={this.getTotal}
                totalPrice={this.state.totalPrice}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;

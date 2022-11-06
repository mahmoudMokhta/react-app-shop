import React, { Component } from 'react'
import CardsHome from './CardsHome'
import Carousell from './Carousell'
import image1 from '../Photos/s1.jpg'
import image2 from '../Photos/s2.jpg'
import image3 from '../Photos/s3.jpg'
import image4 from '../Photos/s4.jpg'
import BestSelling from './BestSelling'
import bestImg1 from '../Photos/t1.jpg'
import bestImg2 from '../Photos/t2.jpg'
import bestImg3 from '../Photos/t3.jpg'
import bestImg4 from '../Photos/t4.jpg'
import ChristmasHome from './ChristmasHome'
import EndHome from './EndHome'

 class Home extends Component {
  state = {
    products: [
      {id:1 , name:'clothing' , items:"5" , image : image1},
      {id:2 , name:'Bag Brand' , items:"20", image : image2},
      {id:3 , name:'Accessories' , items:"6", image : image3},
      {id:4 , name:'Shoes' , items:"8", image : image4}
    ],
    BestSell : [
      {id:1 , price:`150.00$` , img: bestImg1},
      {id:2 , price:`110.00$` , img: bestImg2},
      {id:3 , price:`200.00$` , img: bestImg3},
      {id:4 , price:`300.00$` , img: bestImg4}
    ]
  }
  render() {
    return (
      <>
        <Carousell />
        <CardsHome products ={this.state.products} />
        <BestSelling BestSell={this.state.BestSell} />
        <ChristmasHome />
        <EndHome />
      </>
    )
  }
}

export default Home

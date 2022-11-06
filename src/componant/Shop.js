import React  from 'react'
import BackHome from './BackHome'
import ProductsShop from './ProductsShop'
import ShopHeader from './ShopHeader'



 const Shop = (props)=>  {

 
    return (
      <div>
        <ShopHeader />
        <ProductsShop productShop={props.productShop} addToCart={props.addToCart} />
        <BackHome />
      </div>
    )
  
}

export default  Shop
import React from 'react'
import "./BreadCrums.css";
import arrow_icon from "../../assets/arrow_icon.png"
// import Product from '../../Pages/Product';

const BreadCrums = (props) => {
  const {product} = props;
  if(!product) return null;
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt="" height="10px"/> 
        Shop <img src={arrow_icon} alt="" height="10px" />
        {product.category} <img src={arrow_icon}  height="10px" alt="" />
        {product.name}
        {/* <img src={arrow_icon}  height="10px" alt="" /> */}
    </div>
  )
}

export default BreadCrums
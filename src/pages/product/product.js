import React from 'react'
import "./product.css";
import { Link } from 'react-router-dom';
export const Product = ({ele}) => {

  return (
  <>
    <div className='product-upper'>
      <div className='left-1'>
        <img src={process.env.REACT_APP_UPLOAD_URL + ele.attributes?.image?.data?.attributes.url} alt="" className='image'></img>
      </div>
      <div className='right-1'>
        <span className='game-name'>{ele?.attributes.title}</span><br/><br/>
        <div className='details-1'>{ele?.attributes.description}</div>
        <button className='btn-1'><Link to="/checkout" className='link-1'>Buy Now</Link></button>
       
      </div>
    </div>
    </>
  )
}

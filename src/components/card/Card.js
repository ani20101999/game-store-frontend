import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'


export const Card = ({items}) => {
  

  return (
    <Link className="link" to={`/products/${items?.id}`}>  
    <div className='card'>
        <span className='arrival'>New Arrival</span>
      <img src={process.env.REACT_APP_UPLOAD_URL + items.attributes?.image?.data?.attributes.url} alt="" className='image'></img>
    </div>
    <div className='details'>
        <span className='item-name'>{items?.attributes.title}</span>
        <span className='item-price'>{`price:$${items?.attributes.price}`}</span>
    </div>
    </Link>
  )
}

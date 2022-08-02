import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const CartButton = () => {
  const state = useSelector((state) => state.addItems);
  
  return (
    <>
        <Link to="/cart" className="btn btn-outline-primary ms-1">
            <span className='fa fa-shopping-cart me-1'></span>Cart ({state.length});
            </Link> 
    </>
  )
}

export default CartButton;

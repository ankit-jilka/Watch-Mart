import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem , checkOutGo, addItem, replaceQty} from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const state = useSelector((state)=> state.addItems);
  const dispatch = useDispatch()
  const [qty,setQty] = useState("");
   
  const handleClose = (item) => {
        dispatch(delItem(item));
  }

  const handleCheckOut = () => {
        dispatch(checkOutGo());
  }

  const handleQty = (qty,product) => {
    dispatch(replaceQty({qty,product}));
  }
  var total=0;
  const cartItems = (cartItem) => {
    total = total + cartItem.product.price * cartItem.qty;
   
    return(
       
        <div className='px-4 my-5 bg-light rounded-3' key={cartItem.product.id}>
            <div className="container py-4">
                <button onClick={() => handleClose(cartItem.product)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className='col-md-4'>
                            <img src={process.env.PUBLIC_URL + cartItem.product.img} alt={cartItem.product.title} height="200px" width="180px"/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.product.title}</h3>
                            <select className="form-select w-25 " aria-label="Default select example" value={cartItem.qty} onChange={(e) => dispatch(handleQty(e.target.value,cartItem))}>     
                                <option selected value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>  
   
                            <p className='lead fw-bold'>&#8377; {cartItem.product.price}</p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
  }

  const emptyCart = () => {
        return(
            <div className='px-4 my-5 bg-light rounded-3' >
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
            </div>
        );
  }

  const checkOut = (num) => {
    return(
        <div className="container">
            <div className="row">
                <h3>Total : {total}</h3>
                <Link to="/" onClick={() => handleCheckOut()} className="btn btn-primary w-25">

                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
  }
    return (
    <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && checkOut()}
    </>

  )
}

export default Cart

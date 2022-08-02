import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DATA from '../dataBase';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import { Navigate , Route } from 'react-router-dom';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

const SingleProduct = (props) => {
    const [cartBtn , setCartBtn] = useState("Add to Cart");
    const [qty , setQty ] = useState("1");
    const proId = useParams();
    const proDetail = DATA.filter(x=>x.id == proId.id)
    
    console.log(proDetail);
    const product = proDetail[0];

    const dispatch = useDispatch();
    
    const navigate = useNavigate();
   
    const handleCart = (product) => {
        if(cartBtn === 'Add to Cart'){                 
        dispatch(addItem(product));
        navigate('/');
        }
    }

    return (
    <>
        <div className="container my-5 py-3 prd">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto">
                     <img src={process.env.PUBLIC_URL + product.img} alt={product.title} height="500px"/> 
                </div>
                <div className="col-md-6 mt-4">
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>&#8377; {product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <select className="form-select w-25 " aria-label="Default select example" value={qty} onChange={(e) => setQty(e.target.value)}>
     
                        <option selected value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>             
                    <button onClick={()=> handleCart({product,qty})} className='btn btn-primary mt-2'>{cartBtn}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProduct;

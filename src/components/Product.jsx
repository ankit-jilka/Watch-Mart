import React from 'react'
import { Link } from 'react-router-dom';
import DATA from '../dataBase';

const Product = () => {
  
  return (
    <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Product</h1>
              <hr/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            {DATA.map((item) => {
             return (
              <div className="card ms-2 mt-4" key={item.id} style={{width: '18rem'}}>
                 <img src={process.env.PUBLIC_URL + item.img} className="card-img-top w-100" height="300px" alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="lead">&#8377; {item.price}</p>
                      <Link to={`/product/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
                    </div>
              </div>
            );
        })}
            
          </div>
        </div>
    </div>
  )
}

export default Product

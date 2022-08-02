import React from 'react'
import Product from './Product'
const Home = () => {
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={process.env.PUBLIC_URL+"/imgs/watch1.jpg"} className="d-block w-100" height="500px" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={process.env.PUBLIC_URL+"/imgs/watch2.jpg"} className="d-block w-100" height="500px" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={process.env.PUBLIC_URL+"/imgs/watch5.webp"} className="d-block w-100" height="500px" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={process.env.PUBLIC_URL+"/imgs/watch4.jfif"} className="d-block w-100" height="500px" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>

  </div>
  <br />
  <br/>
  <Product />
  </>
  )
}

export default Home

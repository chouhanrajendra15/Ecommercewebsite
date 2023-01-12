import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    
    <div className='Hero'>



<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true card text-bg-dark text-white border-0">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="/assets/me4.jpg" class="d-block  img-fluid" alt="first"  />
      <div className="card-img-overlay d-flex  flex-column justify-content-center">
    <div className="container ">
    <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON COMMING !!</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS </p>
    </div>
   
  </div>
      
    </div>
    <div class="carousel-item">
      <img src="/assets/new.jpg.jpg" class="d-block  img-fluid" alt="second" />
    </div>
    <div class="carousel-item">
      <img src="/assets/me3.jpg" class="d-block  img-fluid" alt="third" />
    </div>
    <div class="carousel-item">
      <img src="/assets/trend.jpg.jpg" class="d-block  img-fluid" alt="four" />
    </div>
    <div class="carousel-item">
      <img src="/assets/me6.jpg" class="d-block  img-fluid" alt="five" />
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Products />
    </div>
  )
}

export default Home

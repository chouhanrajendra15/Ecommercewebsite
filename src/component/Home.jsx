import React from 'react'
import me3 from "../../src/assets/me3.jpg";
import me4 from "../../src/assets/me4.jpg";
import trend from "../../src/assets/trend.jpg";
import me1 from "../../src/assets/me1.jpg";
import img11 from "../../src/assets/img11.jpg";
import Products from './Products';

const Home = () => {
  return (
  <>
    <div className='Hero'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true card text-bg-dark text-white border-0">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={me3} className="d-block  img-fluid" alt="first" />
            <div className="card-img-overlay d-flex  flex-column justify-content-center">
              <div className="container ">
              <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON COMMING !!</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={me4} className="d-block img-fluid" alt="second" />
          </div>
          <div className="carousel-item">
            <img src={trend} className="d-block  img-fluid" alt="third" />
          </div>
          <div className="carousel-item">
            <img src={img11} className="d-block  img-fluid" alt="four" />
          </div>
          <div className="carousel-item">
            <img src={me1} className="d-block  img-fluid" alt="five" />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
    </>
  )
}

export default Home

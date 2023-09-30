import React from 'react';
import carousel from '../images/carousel.png';
import leftarrow from '../images/leftarrow.png';
import rightarrow from '../images/Rightarrow.png';

function Banner() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner"> 
          <div className="carousel-item active">
            <img src={carousel} className="d-block w-100" alt="..." style={{ height: "auto" }} />
          </div>
          <div className="carousel-item">
            <img src={carousel} className="d-block w-100" alt="..." style={{ height: "auto"}} />
          </div>
          <div className="carousel-item">
            <img src={carousel} className="d-block w-100" alt="..." style={{ height: "auto"}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          {/* <span aria-hidden="true"> 
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#936F01", fontSize: "24px" }} />
          </span> */}
          <span className="visually-hidden"><img src={leftarrow} alt="arrow" style={{width:"40px"}}/></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          {/* <span aria-hidden="true">
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#936F01", fontSize: "24px" }} />
          </span> */}
          <span className="visually-hidden"><img src={rightarrow} alt="arrow" style={{width:"40px"}}/></span>
        </button>
      </div>
    </div>
  )
}

export default Banner;

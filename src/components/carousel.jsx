import React from 'react';
import './carousel.css'; // Import your CSS file
import leftarrow from '../images/leftarrow.png';
import rightarrow from '../images/Rightarrow.png';
// style={{padding : "100px 0px"}}

const style = {
    background: "white",
    padding: "50px",
    boxShadow : "5px 5px 10px rgba(0, 0, 0, 0.5)"
   
}

const Carousel = () => {
  return (
    <div className='containercarousel ' >
        <div id="carouselExampleIndicators" className="carousel slide slide">
        <h2 className='textcarousel'>Healing Stories </h2>
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="cardcarousel">
                <div className="card-bodycarousel" style={style}>
                “I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="cardcarousel">
                <div className="card-bodycarousel">
                “I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="cardcarousel">
                <div className="card-bodycarousel" >
                    “I have Diabetes for the last 20 years for which I have been taking up to 20 units of insulin everyday along with other regular medicines to control my sugar level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2 months of following the diet plan, the results were so positive that at present I no longer need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”
                </div>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="visually-hidden"><img src={leftarrow} alt="arrow" style={{width:"40px"}}/></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="visually-hidden"><img src={rightarrow} alt="arrow" style={{width:"40px"}}/></span>
    </button>
        </div>
    </div>
  );
};

export default Carousel;



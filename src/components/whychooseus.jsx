import React from 'react';
import ahhar from '../images/Picture2.png';

function Whychooseus() {
  const cardStyle = {
    // width: "21rem",
    borderRadius: "54rem"
  };

  return (
    <div className='py-3' style={{backgroundColor:"#936F01E5"}}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4">
          {/* Card 1 */}
          <div className="col mb-0 my-1">
            <div className="card mx-0" style={cardStyle}>
                <div className='py-1'>
                  <img src={ahhar} className="card-img-top d-flex align-item-center justify-content-center mx-auto" alt="..." style={{width:"60px",height:"60px"}}/>
                  <h5 className="card-title my-1">AHAAR</h5>
                </div>
                <div className="card-body">
                  <p className="card-text" style={{fontSize:"12px"}}>Our approach is purely based on an individual’s lifestyle and the connection between Mind-Body-Soul. It is drugless, safe and effective</p>
                  <a style={{color:"#936F01CF"}} href="#" className="btn">Read More</a>
                </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col mb-0 my-1">
            <div className="card mx-0" style={cardStyle}>
            <div className='py-1'>
                  <img src={ahhar} className="card-img-top d-flex align-item-center justify-content-center mx-auto" alt="..." style={{width:"60px",height:"60px"}}/>
                  <h5 className="card-title my-1">AHAAR</h5>
                </div>
                <div className="card-body">
                  <p className="card-text" style={{fontSize:"12px"}}>Our approach is purely based on an individual’s lifestyle and the connection between Mind-Body-Soul. It is drugless, safe and effective</p>
                  <a style={{color:"#936F01CF"}} href="#" className="btn">Read More</a>
                </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col mb-0 my-1">
            <div className="card mx-0" style={cardStyle}>
                    <div className='py-1'>
                      <img src={ahhar} className="card-img-top d-flex align-item-center justify-content-center mx-auto" alt="..." style={{width:"60px",height:"60px"}}/>
                      <h5 className="card-title my-1">AHAAR</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text" style={{fontSize:"12px"}}>Our approach is purely based on an individual’s lifestyle and the connection between Mind-Body-Soul. It is drugless, safe and effective</p>
                      <a style={{color:"#936F01CF"}} href="#" className="btn">Read More</a>
                    </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col mb-0 my-1">
            <div className="card" style={cardStyle}>
                <div className='py-1'>
                  <img src={ahhar} className="card-img-top d-flex align-item-center justify-content-center mx-auto" alt="..." style={{width:"60px",height:"60px"}}/>
                  <h5 className="card-title my-1">AHAAR</h5>
                </div>
                <div className="card-body">
                  <p className="card-text" style={{fontSize:"12px"}}>Our approach is purely based on an individual’s lifestyle and the connection between Mind-Body-Soul. It is drugless, safe and effective</p>
                  <a style={{color:"#936F01CF"}} href="#" className="btn">Read More</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;

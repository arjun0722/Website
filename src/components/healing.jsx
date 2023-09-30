import React from 'react';
import heal1 from '../images/Healing1.png';
import heal2 from '../images/healing.png';
import heal3 from '../images/healing2.png';



function Healing() {
  let cardStyle = {
    color : "white" ,
     background : "#c9b681",
     padding : "20px"
  }
  return (
    <div className="container my-5">
      <h2 className='my-3 text-center'>Our Healing Center</h2>
      <div className="row row-cols-1 row-cols-md-3">
        {/* Card 1 */}
        <div className="col mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-img-top">
              <img
                src={heal1}
                alt="Relieve Ache & Pains"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Relieve Ache & Pains</h5>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-img-top">
              <img
                src={heal2}
                alt="Healing & Strengthening"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Healing & Strengthening</h5>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col mb-4">
          <div className="card" style={cardStyle}>
            <div className="card-img-top">
              <img
                src={heal3}
                alt="Ayurveda Spa"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Ayurveda Spa</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Healing;

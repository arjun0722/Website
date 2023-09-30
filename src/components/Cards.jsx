import React from 'react';
import ahhar from '../images/Picture2.png';
import vihhar from '../images/vihhar.png';
import Nidra from '../images/Nidra.png';
import Dhyana from '../images/dhyana.png'

function Cards() {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4">
        {/* Card 1 */}
        <div className="col mb-4 ">
          <div className="card" style={{ width: '100%',boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
            <div className='py-2' style={{ backgroundColor: '#936F01E5' }}>
              <img
                src={ahhar}
                className="card-img-top d-flex align-item-center justify-content-center mx-auto"
                alt="..."
                style={{ width: '60px', height: '60px' }}
              />
              <h5 className="card-title my-2">AHAAR</h5>
            </div>
            <div className="card-body py-2">
              <p className="card-text">
                Food – It is not about eating less or counting your calories but eating the right kind of food at the right time in a right way. Diet is considered to be one of the Upastambha of life and the greatest medicine. It has a prime role in maintaining health and treating various diseases
              </p>
              <a style={{ color: '#936F01CF' }} href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col mb-4">
          <div className="card" style={{ width: '100%',boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
          <div className='py-2' style={{ backgroundColor: '#936F01E5' }}>
              <img
                src={vihhar}
                className="card-img-top d-flex align-item-center justify-content-center mx-auto"
                alt="..."
                style={{ width: '60px', height: '60px' }}
              />
              <h5 className="card-title my-2">VIHHAR</h5>
            </div>
            <div className="card-body py-2">
              <p className="card-text">
                Food – It is not about eating less or counting your calories but eating the right kind of food at the right time in a right way. Diet is considered to be one of the Upastambha of life and the greatest medicine. It has a prime role in maintaining health and treating various diseases
              </p>
              <a style={{ color: '#936F01CF' }} href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col mb-4">
          <div className="card" style={{ width: '100%',boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
          <div className='py-2' style={{ backgroundColor: '#936F01E5' }}>
              <img
                src={Nidra}
                className="card-img-top d-flex align-item-center justify-content-center mx-auto"
                alt="..."
                style={{ width: '60px', height: '60px' }}
              />
              <h5 className="card-title my-2">NIDRA</h5>
            </div>
            <div className="card-body py-2">
              <p className="card-text">
                Food – It is not about eating less or counting your calories but eating the right kind of food at the right time in a right way. Diet is considered to be one of the Upastambha of life and the greatest medicine. It has a prime role in maintaining health and treating various diseases
              </p>
              <a style={{ color: '#936F01CF' }} href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col mb-4">
          <div className="card" style={{ width: '100%',boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
          <div className='py-2' style={{ backgroundColor: '#936F01E5' }}>
              <img
                src={Dhyana}
                className="card-img-top d-flex align-item-center justify-content-center mx-auto"
                alt="..."
                style={{ width: '60px', height: '60px' }}
              />
              <h5 className="card-title my-2">DHYANA</h5>
            </div>
            <div className="card-body py-2">
              <p className="card-text">
                Food – It is not about eating less or counting your calories but eating the right kind of food at the right time in a right way. Diet is considered to be one of the Upastambha of life and the greatest medicine. It has a prime role in maintaining health and treating various diseases
              </p>
              <a style={{ color: '#936F01CF' }} href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

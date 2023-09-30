import React from 'react';
import review from '../images/review.png';
import star from '../images/star.png';

function Review() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="font-weight-bold">Review & Testimonials</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8 mx-auto">
          <div className="card shadow">
            <div className="card-body" style={{color:"white",background: "linear-gradient(180deg, #936F01 -11.76%, rgba(147, 111, 1, 0.00) 173.52%)"
}}>
              <div className="row">
                <div className="col-md-5">
                  <div className="">
                    <img src={review} alt="girl" style={{width:"221px",height:"281px"}}/>
                  </div>
                </div>
                <div className="col-md-6" >
                  <div className="d-flex align-items-center">
                    <div className="mr-2">
                      <img src={star} alt="Star" width="20" height="20" />
                      <img src={star} alt="Star" width="20" height="20" />
                      <img src={star} alt="Star" width="20" height="20" />
                      <img src={star} alt="Star" width="20" height="20" />
                      <img src={star} alt="Star" width="20" height="20" />
                    </div>
                    <span className="text">4.5 rating</span>
                  </div>
                  <div className="mt-2">
                  <p className="font-weight-bold">I recently visited the Ayurvedic Clinic and had a wonderful experience. The staff was friendly and welcoming, creating a warm and calming atmosphere.</p>
                    <p className="font-weight-bold">Elisa Grant</p>
                    <p className="text">Legacy Solutions Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;

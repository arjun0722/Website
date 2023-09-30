import React from 'react';

function AboutUs() {
  return (
    <div className="container">
    <h4 className='text-center my-4'>About Us</h4>
      <div className="row my-5">
        <div className="col-md-6">
          <div style={{background: "linear-gradient(90deg, rgba(147, 111, 1, 0.7) 80%, #fff 20%)",borderRadius:"15px"}}>
              <div className='my-3'>
                    <iframe
                    className='py-3 text-left'
                    width="90%"
                    height="300"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="YouTube video"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
                </div>
          </div>
        </div>

        {/* Right column for text content */}
        <div className="col-md-6">
          <div className="text-center">
            <h5 style={{color:"#936F01"}}>About DoctorAvantika Krishna Killa</h5>
            <p>
            A qualified Naturopathy and Yoga Physician, who takes an integrative medical approach to health. Having 10+ years of experience in integrative health, she firmly believes that balance is the key to good health and that abiding to the principles of Mother Nature, one can reverse chronic diseases we encounter nowadays. She has been working extensively in the managing some of the chronic lifestyle related conditions like Diabetes, Asthma, Autoimmune diseases, Sciatica, PCOS, Infertility, Obesity, Thyroid, Dyslipidemia and more. She has had the opportunity to work with some great Naturopaths, Doctors and Hospitals like the All India Institute of Medical Sciences (AIIMS), New Delhi. She is also a trained Acupuncturist and Chiropractor.
            </p>
            <a href="#" className="btn" style={{border:"1px solid #936F01CF",color:"#936F01CF"}}>
            Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

import React from 'react';
import logo from '../images/Picture1.png';
import phone from '../images/Picture8.png';
import email from '../images/Picture7.png';
import address from '../images/Picture9.png';
import back from '../images/Picture10.png';
import Copyright from '../images/Picture11.png';

function Frame() {
  return (
    <>
      <div className="container-fluid mt-3" style={{ backgroundColor: "#f4f1e6" }}>
        <div className="row py-3">
          <div className="col-md-12 text-center">
            <img src={logo} alt="logo" style={{ maxWidth: "219px", height: "auto" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Healing Center</li>
              <li>Healing Stories</li>
              <li>News & Media</li>
              <li>Programs</li>
              <li>Online Programs</li>
            </ul>
          </div>
          <div className="col-md-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.873827109788!2d77.36404571507806!3d28.572029982442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce450f69311cf%3A0xd653429d56c01b1!2sPanchatattva%2C%20C-175%2C%20Sector%20100%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1561067769209!5m2!1sen!2sin"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Copyright Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <p><img src={phone} alt='phone' style={{ width: "19px" }} /> +91 8178546612</p>
          </div>
          <div className="col-md-4">
            <p><img src={email} alt='email' style={{ width: "19px" }} /> info@panchatattva.in</p>
          </div>
          <div className="col-md-4">
            <p><img src={address} alt='address' style={{ width: "19px" }} /> Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh – 201303</p>
          </div>
        </div>
        <div className="row py-3" style={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}>
          <div className="col-md-12 text-center">
            <p className="py-0"><img src={Copyright} alt='copyright' style={{ width: "20px" }} /> 2023 Panchatattva Naturopathy Clinic. All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame;

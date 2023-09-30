import React from 'react';
import logo from '../images/logo.png';
import phone from '../images/phone.png';
import email from '../images/email.png';
import address from '../images/address.png';



function Appointment() {
  return (
    <>
    <h2 className='my-3'>Book Appointment</h2>
    <div className='' style={{display:"flex",justifyContent:"center"}}>
       <div className="container m-3" style={{backgroundColor:"#936F01",color:"white",borderRadius:"10px"}}>
      <div className="row">
        <div className="col-md-6">
          <div className="text-left">
            <img src={logo} alt="image" className="img-fluid" style={{width:"237px",height:"auto"}} />
          </div>
          <div className="mt-4">
            <div>
            <p className='d-flex' style={{textAlign:"initial"}}><img src={phone} alt='' style={{width:"24px",height:"24px",margin:"0px 5px"}}/>+91 8178546612</p>
            </div>
            <p className='d-flex' style={{textAlign:"initial"}}><img src={email} alt='' style={{width:"24px",height:"24px",margin:"0px 5px"}} />info@panchatattva.in</p>
            <p className='d-flex' style={{textAlign:"initial"}}><img src={address} alt='' style={{width:"24px",height:"24px",margin:"0px 5px"}} />Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh – 201303</p>
          </div>
        </div>
        <div className="col-md-6 d-flex m-auto">
          <form className="row g-3 mx-1 my-2 p-1" style={{backgroundColor:"white",width:"100%",color:"#8D8D8D",borderRadius:"12px"}}>
          <div className="col-12 my-1">
              <input type="text" className="form-control" id="inputName" placeholder="Enter Full Name" />
            </div>
            <div className="col-12 my-1">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
            <div className="col-12 my-1">
              <input type="text" className="form-control" id="inputPhone" placeholder="Phone Number" />
            </div>
            <div className="col-md-6 my-1">
              <input type="email" className="form-control" id="inputGmail" placeholder="Gmail" />
            </div>
            <div className="col-md-6 my-1">
              <input type="password" className="form-control" id="inputAge" placeholder="Age" />
            </div>
            <div className="col-md-6 my-1">
              <input type="email" className="form-control" id="inputCity" placeholder="City" />
            </div>
            <div className="col-md-6 my-1">
              <input type="password" className="form-control" id="inputCountry" placeholder="Country" />
            </div>
            <div className="col-md-6 my-1">
              <input type="email" className="form-control" id="inputAppointment" placeholder="Type Of Appointment" />
            </div>
            <div className="col-md-6 my-1">
              <input type="password" className="form-control" id="inputTime" placeholder="Date&Time" />
            </div>
            <div className="col-md-6 my-1">
              <div className="form-check-inline">
                <input className="form-check-input" type="radio" name="appointmentType" id="inPerson" value="inPerson" />
                <label className="form-check-label" htmlFor="inPerson">
                  In-person
                </label>
              </div>
              <div className="form-check-inline">
                <input className="form-check-input" type="radio" name="appointmentType" id="virtual" value="virtual" />
                <label className="form-check-label" htmlFor="virtual">
                  Virtual
                </label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div>
                <textarea className="form-control" id="healthIssue" rows="4" placeholder="Enter your health issue here..."></textarea>
              </div>
            </div>

            <div className="col-12 my-1">
              <button type="submit" className="btn" style={{width:"100%",color:"white",backgroundColor:"#936F01"}}>Book An Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Appointment;

import React from 'react';
import logo from '../images/Picture1.png';
import background from '../images/background.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundImage:{background}}}>
      <div className="container col-md-12" style={{fontSize:"16px",fontWeight:"600"}}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mr-auto">
            <div className="nav-item">
              <a className="nav-link mx-3"  href="#">
                Home
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link mx-3" href="#">
                About Us
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link mx-3" href="#">
                Our Healing Center
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link mx-3" href="#">
                Healing Stories
              </a>
            </div>
          </div>
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="180" /> 
          </a>

          <div className="navbar-nav ml-auto">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <div className="dropdown-menu">
                <div>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </div>
                <div>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </div>
                <div>
                  <hr className="dropdown-divider" />
                </div>
                <div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a className="nav-link mx-3" href="#">
                News And Media
              </a>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Online and Programs
              </a>
              <div className="dropdown-menu">
                <div>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </div>
                <div>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </div>
                <div>
                  <hr className="dropdown-divider" />
                </div>
                <div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-item mx-3">
              <form className="form-inline">
                <button className="btn text-center py-1 px-3  " style={{background : "#936e00" , color : "white"}} type="submit">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

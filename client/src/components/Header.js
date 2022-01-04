import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";

const Header = ({history}) => {
  const handleLogout = event => {
    logout(() =>{
      history.push('/signin')
    });
  }



  const showNavigation = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
        <i class="fas fa-cash-register"></i> ShMarket
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                  <i class="fas fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link ">
                  <i class="fas fa-user-plus"></i> Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                  <i class="fas fa-sign-in-alt"></i> Signin
                  </Link>
                </li>
              </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/user/dashboard" className="nav-link ">
                  <i class="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link ">
                  <i class="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <button className="btn btn-link text-secondary text-decoration-none p-0 pt-2" onClick={handleLogout}>
                  <i class="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </Fragment>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
  return <header id="header"> {showNavigation()} </header>;
};

export default withRouter(Header);

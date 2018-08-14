import React from "react";
import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-danger">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <Link className="nav-link text-light" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/signup">Sign-up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/plats">Plats</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/cart">Cart</Link>
          </li>
        </ul>

        <ul className="navbar-nav mr-right">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" className="form-control" id="inputemail" placeholder="Email" />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Login</button>
          </form>
        </ul>

      </nav>

    </div>
  )
}

export default Nav;
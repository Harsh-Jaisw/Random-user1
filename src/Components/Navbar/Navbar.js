import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <section>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid ">
    <a className="navbar-brand" to="/#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
        <a className="nav-link active" to="/Users">User Details
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      
       
      
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0 mx-2" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
  </section>
  )
}

export default Navbar;
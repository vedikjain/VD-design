import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar () {
    return (
        <nav className="navbar sticky-top navbar-expand-lg " style={{backgroundColor:'#133132'}} >
            <div className="container-fluid ">
                <a className="navbar-brand text-white" href="/">VD Design & Development</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto " id="navbarNav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link active text-white">Home</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/About" className="nav-link active text-white">About us</Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="/Portfolio" className="nav-link active text-white">Portfolio</Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="/Contact" className="nav-link active text-white">Contact</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
//custome proptype
Navbar.propTypes = {
    title : PropTypes.string
}

//Default proptype
Navbar.defaultProps = {
    title : "Textutils"
}


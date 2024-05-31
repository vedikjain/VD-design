import React from 'react'
import './Style.css'

// C:\Users\DELL\Desktop\firstapp\src\comaponent\inc\style.css
// src\index.css
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Bottom() {
    return (
        <div className="container-fluid  " style={{ backgroundColor: '#133132' }} >
            <footer className="row justify-content-md-center m-auto py-4 border-top">
                <div className="col col-lg-2 ">
                    <img src="/images/pics/vdlogo.png" className="img-fluid " alt="" />

                </div>
                <div className="col col-lg-2 m-5 text-decoration-none text-info">
                    <h5>Section</h5>
                    <ul className="nav flex-column"   >
                        <li className="nav-item mb-2" >
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/About" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/Portfolio" style={{ textDecoration: 'none', color: 'white' }}>Portfolio</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
                        </li>

                    </ul>
                </div>
                <div className="col col-lg-2 m-5 text-decoration-none text-info">
                    <h5>Address</h5>
                    <ul className="nav flex-row text-white"   >
                        <li className="nav-item mb-2 d-flex" >
                            <img src="/images/pics/location.png" alt="" style={{ width: '2.5rem', height: '2.5rem' }} />
                            <p>Jamuna Vihar <br /> Bhilwara (311001), Rajasthan</p>
                            
                        </li>
                        <li className="nav-item mb-2">

                        </li>
                        <li className="nav-item mb-2 d-flex">
                            <img src="/images/pics/phone.png" alt="" style={{ width: '2.5rem', height: '2.5rem' }} />
                            <h6>+91 8829856660</h6>
                        </li>
                        <li className=" nav-item mb-2 d-flex">
                            <img src="/images/pics/phone.png" alt="" style={{ width: '2.5rem', height: '2.5rem' }} />
                            <h6>+91 9571710645</h6>
                        </li>

                    </ul>
                </div>


            </footer>
        </div>

    )

}
Bottom.propTypes = {
    title: PropTypes.string
}

//Default proptype
Bottom.defaultProps = {
    title: "Textutils"
}

export default Bottom;
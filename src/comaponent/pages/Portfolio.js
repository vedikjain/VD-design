
import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Portfolio() {

    return (
        <>


            <div class="p-5 w-100 m-auto h-75  rounded-3" style={{ borderRadius: '50px', background: '#e0e0e0', boxShadow: 'inset -35px -35px 70px #bebebe, inset 35px 35px 70px #ffffff' }}>
                <div class="container-fluid d-flex justify-content-center py-5">
                    <h1 class="display-5 fw-bold my-5 py-5">VD Design & Development</h1>
                </div>
                <p class="col-md-8 w-75 fs-2 container-fluid d-flex justify-content-center">Discover our company's portfolio, showcasing our expertise in web design and development. From sleek corporate websites to captivating e-commerce platforms and engaging blogs, we create customized solutions that drive results. Contact us to discuss your project and let us bring your vision to life!
                </p>

            </div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Our Projects</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">E-Commerce Website</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/satguru.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                                <div>
                                    <Link to='https://satgurucakematerials.com/'>
                                        <button type="button" className="btn  m-2 bg-light">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Resort Website</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/Virasat.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                                <div>
                                    <Link to='https://virasatresortpushkar.000webhostapp.com/'>
                                        <button type="button" className="btn  m-2 bg-light">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Industrial Website</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/SRRS.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                                <div>
                                    <Link to='https://shreerajaramsteels.000webhostapp.com/'>
                                        <button type="button" className="btn  m-2 bg-light">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Graphic Design</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/graphicdesign.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                                <div>
                                    <Link to='https://www.instagram.com/specsview.official/'>
                                        <button type="button" className="btn  m-2 bg-light">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Social Marketting</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/social.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                                <div>
                                    <Link to='https://www.instagram.com/specsview.official/'>
                                        <button type="button" className="btn  m-2 bg-light">View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Custom Software</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/cu.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                                <div>
                                    <Link to="https://wa.me/919571710645?text=Send Me your Quote" target="_blank">
                                        <button type="button" className="btn  m-2 bg-light">Contact for More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
           
        </>
    )

}
export default Portfolio;
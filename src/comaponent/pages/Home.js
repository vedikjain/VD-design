
import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return (
        <>
        

        
            <div className=" w-100" id="custom-cards" >
              
                <img   className="w-100"  src="/images/pics/1.png" alt="" />
                
            </div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Our Services</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden   shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Web Development</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/webdev.jpg" alt="Bootstrap" style={{ width: '18rem', height: '18rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="card card-cover h-100 overflow-hidden  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 " style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">App Development</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/app.jpg" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Digital Marketting</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/digi.webp" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Custom Software</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/cu.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border  border-white w-100" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">Bulk SMS</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/bu.png" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{ backgroundColor: '#133132' }}>
                                <h5 className="  mb-4 display-6  fw-bold">UI/UX Design</h5>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/images/pics/uiux.jpeg" alt="Bootstrap" style={{ width: '15rem', height: '15rem' }} className=" rounded border border-white w-100" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
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
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Skills</h2>
                <div className="mx-5 row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 " style={{ backgroundImage: 'url("/images/pics/Skills.png")', backgroundRepeat: 'no-repeat', height: '80vh', position: 'relative', top: '5rem' }}>

                </div>
            </div>
        
        </>
    )

}
export default Home;
import React from "react";

function About() {
    return (
        <>
          <div className="w-100" id="custom-cards">
                <img src="/images/pics/vission.png" alt="" className="w-100" />
                   
           
            </div>
            <div className="px-4 pt-5 my-5 text-center ">
                <h1 className="display-4 fw-bold ">VD Design & Development</h1>
                <div className="col-lg-6 mx-auto m-2 p-2">
                    <h2 className="lead mb-4">Welcome to VD Design & Development, where innovation meets excellence. Established in 2024, we are a cutting-edge IT firm dedicated to delivering top-notch solutions tailored to your needs. Specializing in web development, app development, digital marketing, and custom software, we offer a comprehensive suite of services to propel your business forward in the digital age.
                    <br />
                    At VD Design & Development, we are committed to excellence in everything we do. Partner with us and experience the power of innovation firsthand.
                    </h2>

                </div>
                <div className="overflow-hidden"  >
                    <div className="container px-5">
                        <img src="/images/pics/Front.png" className="img-fluid rounded-circle " alt="Example image" loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Our Services</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden   shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{backgroundColor:'#133132'}}>
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
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 " style={{backgroundColor:'#133132'}}>
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
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{backgroundColor:'#133132'}}>
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
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{backgroundColor:'#133132'}}>
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
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{backgroundColor:'#133132'}}>
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
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{backgroundColor:'#133132'}}>
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
        </>
    )

}
export default About;
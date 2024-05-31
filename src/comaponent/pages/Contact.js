import React from "react";
import { Link } from "react-router-dom";

function Contact() {
   
    return (
        <>
            {/* <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Contact  Section</h2>
                <div className="mx-5 row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" style={{ backgroundImage: 'url("/images/pics/postermain.png")', backgroundRepeat: 'no-repeat', height: '80vh' }}>

                </div>
            </div> */}

            <div className="px-4 py-5 my-5 text-center">

                <h1 className="display-5 fw-bold text-body-emphasis">Get In Touch</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 fs-3 ">Whether you have a project in mind or just want to learn more about our services, our team is here to help. Don't hesitate to reach out to us for any inquiries or assistance. You can contact us through the form below, give us a call, or visit our office. We look forward to hearing from you</p>

                </div>
            </div>

            <div className="container px-4 py-5" id="custom-cards">


                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex  h-100 p-5 pb-3 text-white text-shadow-1 bg-dark">
                                <img src="/images/pics/location.png" alt="" style={{ width: '2.5rem', height: '2.5rem' }} />
                                <h4>Address</h4>
                            </div>
                            <p className="mx-4 " style={{ position: 'absolute', top: '7rem' }}>Jamuna Vihar <br /> Bhilwara (311001), Rajasthan</p>
                            <br/>
                            <br/>
                            <Link className="d-flex justify-content-center " to="https://maps.app.goo.gl/8gGJX7hFQYcDNDwLA" target="_blank">
                                <button className="btn bg-info my-3" style={{ textDecoration: "none" }}>Click Here for Direction</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-60 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex  h-100 p-5 pb-3 text-white text-shadow-1 bg-dark">
                                <img src="/images/pics/phone.png" alt="" style={{ width: '2.5rem', height: '2.5rem' }} />
                                <h4>Contact</h4>
                            </div>
                            <h6 className="mx-4 ">+91 9571710645</h6>
                            <h6 className="mx-4">+91 8829856660</h6>
                            <Link className="d-flex justify-content-center " to="https://wa.me/918829856660?text=Send Me your Quote" target="_blank">
                                <button className="btn bg-info my-3" style={{ textDecoration: "none" }}>Click Here for Whatsapp</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-60 overflow-hidden text-bg-dark  shadow-lg">
                            <div className="d-flex  h-100 p-5 pb-3 text-white text-shadow-1 bg-dark">
                                <img src="/images/pics/gmail.png" alt="" style={{ width: '2.5rem', height: '2.5rem' }} />
                                <h4>Email</h4>
                            </div>
                            <h6 className="mx-4 py-3">vddesign12@gmail.com</h6>
                            <Link className="d-flex justify-content-center " to="mailto:vddesign12@gmail.com?text=Send Me your Quote" target="_blank">
                                <button className="btn bg-info my-3" style={{ textDecoration: "none" }}>Click Here for E-mail</button>
                            </Link>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )

}
export default Contact;
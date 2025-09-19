import React from 'react';
import { Container } from 'react-bootstrap';

function ContactPage() {
    return (
        <div className='container'>
            <div className="container position-relative">
                <img
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                    alt=""
                    className="w-100"
                    style={{ maxHeight: "600px", objectFit: "cover" }}
                />
                <div
                    className="position-absolute top-50 start-50 translate-middle text-white fw-bold"
                    style={{ padding: "10px 20px", borderRadius: "8px" }}
                >
                    <h1 className='text-center mb-5'><b>Contact Us</b></h1>
                    <p className='text-center lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium eveniet officia impedit error a sequi? Debitis optio asperiores voluptas. Cumque doloribus sit quam asperiores dolor earum at natus vero.</p>
                </div>
            </div>

            <div className='mt-5'>
                <div className='d-flex justify-content-between'>
                    <div class=" col-5">
                        <label for="exampleFormControlInput1" class="form-label">Fullname</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="J.Spenser" />
                    </div>

                    <div class="col-5">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </div>

                <div class="mt-5">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

            </div>

            <div className="container mt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.239379575674!2d74.569761!3d42.874621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82d3a45678b%3A0xabcdef!2sBishkek!5e0!3m2!1sru!2skg!4v1726742740000!5m2!1sru!2skg"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            
            <div className='footer'>
                <div className='row'>
                    <div className='col-3 mt-5'>
                        <h3 className='text-white'>Paradise View</h3>
                        <p className='text-white mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </p>
                    </div>

                    <div className='col-2 mt-5'>
                        <h6 className='text-white'>Quick Links</h6>
                        <ul className='list-unstyled mt-3'>
                            <li className='text-white'>Home</li>
                            <li className='text-white'>Rooms</li>
                            <li className='text-white'>Facilities</li>
                            <li className='text-white'>Contact</li>
                        </ul>
                    </div>

                    <div className='col-2 mt-5'>
                        <h6 className='text-white'>Company</h6>
                        <ul className='list-unstyled mt-3'>
                            <li className='text-white'><small>Privacy policy</small></li>
                            <li className='text-white'><small>Refund policy</small></li>
                            <li className='text-white'>FAQ</li>
                            <li className='text-white'>About</li>
                        </ul>
                    </div>

                    <div className='col-2 mt-5'>
                        <h6 className='text-white'>Support</h6>
                        <ul className='list-unstyled mt-3'>
                            <li className='text-white'><small>Help Center</small></li>
                            <li className='text-white'><small>Contact Us</small></li>
                            <li className='text-white'>Terms</li>
                            <li className='text-white'>Careers</li>
                        </ul>
                    </div>

                    <div className='col-3 mt-5'>
                        <h6 className='text-white'>Newsletter</h6>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto recusandae </p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter your name" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>

                    <hr className='text-white mt-5' />

                    <p className='text-center text-white mt-5 mb-3'>Paradise view 2020</p>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
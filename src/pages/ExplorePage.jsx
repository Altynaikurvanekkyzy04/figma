import React from 'react';
import { Container } from 'react-bootstrap';

function ExplorePage() {
    return (
        <div className='container'>
            <div className="video-container col-12">
                <iframe
                    src="https://www.youtube.com/embed/iogcY_4xGjo"
                    title="YouTube video player"
                    height={"300px"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>

            <h3 className='text-center mt-5 fw-bold'>Take A Tour</h3>

            <div className='mt-5 col-12'>
                <div className="container position-relative">
                    <img
                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                        alt=""
                        className="img-fluid w-100"
                        style={{ maxHeight: "500px", objectFit: "cover", borderRadius: "20px" }}
                    />
                    <div
                        className="position-absolute top-80 start-50 translate-middle"
                        style={{
                            padding: "10px 20px",
                            borderRadius: "10px",
                            backgroundColor: "white"
                        }}
                    >
                        <h1 className='text-center text mb-5'>Luxury Rooms</h1>
                        <p className='text-center lead'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium eveniet officia impedit error a sequi? Debitis optio asperiores voluptas. Cumque doloribus sit quam asperiores dolor earum at natus vero.
                        </p>
                    </div>
                </div>


                <div className='mt-5 col-12'>
                    <div className="container position-relative" style={{ marginTop: "200px" }}>
                        <img
                            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                            alt=""
                            className="img-fluid w-100"
                            style={{ maxHeight: "500px", objectFit: "cover", borderRadius: "20px" }}
                        />
                        <div
                            className="position-absolute top-80 start-50 translate-middle"
                            style={{
                                padding: "10px 20px",
                                borderRadius: "10px",
                                backgroundColor: "white"
                            }}
                        >
                            <h1 className='text-center text mb-5'>Gym Center</h1>
                            <p className='text-center lead'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium eveniet officia impedit error a sequi? Debitis optio asperiores voluptas. Cumque doloribus sit quam asperiores dolor earum at natus vero.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='mt-5 col-12'>
                    <div className="container position-relative" style={{ marginTop: "200px" }}>
                        <img
                            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                            alt=""
                            className="img-fluid w-100"
                            style={{ maxHeight: "500px", objectFit: "cover", borderRadius: "20px" }}
                        />
                        <div
                            className="position-absolute top-80 start-50 translate-middle"
                            style={{
                                padding: "10px 20px",
                                borderRadius: "10px",
                                backgroundColor: "white"
                            }}
                        >
                            <h1 className='text-center text mb-5'>Restuarant</h1>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium eveniet officia impedit error a sequi? Debitis optio asperiores voluptas. Cumque doloribus sit quam asperiores dolor earum at natus vero.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            <div className='p-5'></div>
            <div className='p-5'></div>

        
            <div className='footer mt-5'>
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

export default ExplorePage;
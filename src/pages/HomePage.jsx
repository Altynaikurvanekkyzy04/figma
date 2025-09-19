import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <h1 className=' text'><em>Paradise View</em></h1>
                    <h2 className='mt-3 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolores <br /> maiores itaque, placeat ullam </p>

                    <div className='mt-3 d-flex gap-3'>
                        <button className="btn1">Book Now</button>

                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" class="bi bi-play-circle-fill  mt-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                        </svg>

                        <p className='fw-bold mt-2'>Take a tour</p>

                    </div>
                </div>

                <div className='col-6 d-flex justify-content-end'>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0LOaeHFY0-yShV314tMFLXiWkhOOjwZ0Iw&s"
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>

                <div className="container position-relative">
                    <div
                        className="bg-white p-3 rounded shadow d-flex flex-wrap justify-content-between gap-3"
                        style={{
                            position: "absolute",
                            bottom: "50px",
                            width: "98%",
                            left: "1%"
                        }}
                    >
                        <div className="d-flex flex-column">
                            <label className="form-label">Location</label>
                            <select className="form-select">
                                <option selected>St.Aitmatov</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="d-flex flex-column">
                            <label className="form-label">Room Type</label>
                            <select className="form-select">
                                <option selected>Standart</option>
                                <option value="1">Lux</option>
                                <option value="2">Comfort</option>
                                <option value="3">Premier</option>
                            </select>
                        </div>

                        <div className="d-flex flex-column">
                            <label className="form-label">Person</label>
                            <select className="form-select">
                                <option selected>01</option>
                                <option value="1">02</option>
                                <option value="2">03</option>
                                <option value="3">04</option>
                            </select>
                        </div>

                        <div className="d-flex flex-column">
                            <label className="form-label">Check-in</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className="form-label">Check-out</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className="form-label">&nbsp;</label>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>



                <h1 className='text-center mt-5 fw-bold'>Our Facilties</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente consequuntur, eius ipsa commodisi </p>

                <div className="container my-4">
                    {[...Array(2)].map((_, rowIdx) => (
                        <div key={rowIdx} className="row g-3 mb-3 justify-content-center">
                            {[...Array(4)].map((_, colIdx) => (
                                <div key={colIdx} className="col-6 col-md-3">
                                    <div className="d-flex flex-column align-items-center bg-light p-3 rounded shadow text-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            fill="currentColor"
                                            className="bi bi-controller text mb-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                                            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                                        </svg>
                                        <p className="mb-0 fw-bold text">GamePad</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>



                <div className="container position-relative">
                    <img
                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                        alt=""
                        className="w-100"
                        style={{ maxHeight: "700px", objectFit: "cover" }}
                    />
                    <div
                        className="position-absolute top-50  start-50 translate-middle text-white fw-bold"
                        style={{ padding: "10px 20px", borderRadius: "8px" }}
                    >
                        <h1 className='text-center mb-5'><b>Luxuruis Rooms</b></h1>
                        <hr className='hr' />

                        <p className='text-center'>All room by design with comfort</p>

                        <div className="d-flex gap-5 justify-content-center">


                            <div className="card col-4" style={{ width: "350px" }}>
                                <div className="ratio ratio-1x1">
                                    <img
                                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                                        className="card-img-top"
                                        alt="Room 1"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Cozy and modern room with all the amenities you need for a comfortable stay.
                                    </p>
                                </div>
                            </div>


                            <div className="card col-4" style={{ width: "350px" }}>
                                <div className="ratio ratio-1x1">
                                    <img
                                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                                        className="card-img-top"
                                        alt="Room 2"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Spacious room with natural light and comfortable furnishings.
                                    </p>
                                </div>
                            </div>


                            <div className="card col-4" style={{ width: "350px" }}>
                                <div className="ratio ratio-1x1">
                                    <img
                                        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                                        className="card-img-top"
                                        alt="Room 3"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        Stylish and elegant room with modern amenities for your comfort.
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>

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

export default HomePage;
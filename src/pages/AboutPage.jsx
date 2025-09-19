import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
    return (
        <div className="container">
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
                    <h1 className='text-center mb-5'><b>About Us</b></h1>
                    <p className='text-center lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium eveniet officia impedit error a sequi? Debitis optio asperiores voluptas. Cumque doloribus sit quam asperiores dolor earum at natus vero.</p>
                </div>
            </div>


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-7 '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUnD1EOQtPPY0q6V6k2Xfm5ijImO3gWWc8A&s" className='img-fluid ms-5' alt=""
                            width="500"
                            height="300"
                        />

                        <h4 className='mt-3 text-center'>Kim Chan Ji (Manager)</h4>
                    </div>

                    <div className='col-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nesciunt ut omnis incidunt natus eaque, cumque voluptatibus repellendus voluptatem iusto obcaecati nam iure sequi voluptas iste rem animi laboriosam adipisci.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aut. Libero rerum est repudiandae vel id blanditiis, eum, quidem maiores dolore corporis, dolores quos expedita in. Eveniet nihil natus suscipit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis natus exercitationem consequuntur laudantium odio sed, blanditiis nostrum laborum quas mollitia voluptates quibusdam tenetur consectetur voluptate. Unde dolorum perferendis debitis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore molestiae consequuntur odit consequatur commodi debitis nihil ex sunt! Iusto ab nobis accusamus eos quo laudantium dicta molestias labore ducimus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni. Officia, rerum! Quaerat, in. Quisquam, quia. Quisquam, quia. Quisquam, quia.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea accusantium nulla saepe iure. Quasi ducimus praesentium, sapiente impedit eos porro ullam, iusto fugiat id in provident distinctio ut totam? Earum!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt inventore temporibus animi iure illum nesciunt voluptates, dolore sapiente perferendis, nihil vero magnam labore, architecto earum impedit? Amet, corrupti sint?
                        </p>
                    </div>

                </div>
                <h4 className='mt-5 text-center'>Clients</h4>

                <div className='mt-5 d-flex justify-content-between align-items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Manchester_United_FC_crest.svg"
                        alt="ManU"
                        style={{ width: "50px", height: "50px" }} />
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/cf/Real_Madrid_CF.svg"
                        alt="Real Madrid"
                        style={{ width: "50px", height: "50px" }} />
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/FC_Barcelona_logo.svg"
                        alt="Barcelona"
                        style={{ width: "50px", height: "50px" }} />
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Chelsea_FC.svg"
                        alt="Chelsea"
                        style={{ width: "50px", height: "50px" }} />
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Juventus_FC_2017_logo.svg"
                        alt="Juventus"
                        style={{ width: "50px", height: "50px" }} />
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



export default AboutPage;
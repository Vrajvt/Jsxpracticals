import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Bootsrap.css'

export default function Bootsrap() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">My Website</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    More
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">About Us</a></li>
                                    <li><a class="dropdown-item" href="#">Contact</a></li>
                                    <li class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Help</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>

                            <li class="nav-item">
                                <a class="btn btn-outline-light" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section class="hero-section text-center">
                <div class="container">
                    <h1 class="display-4">Welcome to My Website</h1>
                    <p class="lead">This is a simple Bootstrap website template. Customize it to fit your needs!</p>
                    <a href="#features" class="btn btn-light btn-lg">Learn More</a>
                </div>
            </section>


            <section id="features" class="py-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Feature 1</h5>
                                    <p class="card-text">Description of the first feature.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Feature 2</h5>
                                    <p class="card-text">Description of the second feature.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Feature 3</h5>
                                    <p class="card-text">Description of the third feature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://i.pinimg.com/originals/85/b3/31/85b3314cd32bc6f3bd59f21e9dbec0d0.jpg"
                            className="d-block w-100"
                            alt="..."
                            height={"880px"}
                        />

                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://www.sunhome.ru/i/wallpapers/4/krasivie-gornie-peizazhi.orig.jpg"
                            className="d-block w-100"
                            alt="..."
                            height={"880px"}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.pinimg.com/originals/2e/6f/58/2e6f584594c4b23785354911774e8f52.jpg"
                            className="d-block w-100"
                            alt="..."
                            height={"880px"}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section id="cards" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Our Services</h2>
                    <div class="row text-center">

                        <div class="col-md-4">
                            <div class="card card-custom">
                                <img src="https://img.goodfon.ru/original/960x854/f/4d/noutbuk-asus-hi-tech.jpg" class="card-img-top" alt="Service 1" height="300px" />
                                <div class="card-body">
                                    <h5 class="card-title">Service 1</h5>
                                    <p class="card-text">Description of Service 1 goes here.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card card-custom">
                                <img src="https://i.pinimg.com/originals/a5/3c/94/a53c9451dd58bf2035bad37c0fa5c39b.jpg" class="card-img-top" alt="Service 2" height="300px" />
                                <div class="card-body">
                                    <h5 class="card-title">Service 2</h5>
                                    <p class="card-text">Description of Service 2 goes here.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card card-custom">
                                <img src="https://kartinki.pics/uploads/posts/2022-03/1647049457_49-kartinkin-net-p-kartinki-na-nout-60.jpg" class="card-img-top" alt="Service 3" height="300px" />
                                <div class="card-body">
                                    <h5 class="card-title">Service 3</h5>
                                    <p class="card-text">Description of Service 3 goes here.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact-form" class="bg-light">
                <div class="container">
                    <h2 class="text-center mb-4">Contact Us</h2>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
            <footer class="footer bg-dark text-white py-4">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 mb-4">
                            <h5>About Us</h5>
                            <p>We are a leading company in providing excellent services. Our mission is to deliver top-quality products and services to our customers.</p>
                        </div>


                        <div class="col-md-4 mb-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-white">Home</a></li>
                                <li><a href="#" class="text-white">Features</a></li>
                                <li><a href="#" class="text-white">Pricing</a></li>
                                <li><a href="#" class="text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 mb-4">
                            <h5>Contact</h5>
                            <p><i class="bi bi-geo-alt"></i> 123 Main Street, City, Country</p>
                            <p><i class="bi bi-envelope"></i> info@website.com</p>
                            <p><i class="bi bi-phone"></i> +1 (234) 567-890</p>


                            <div class="social-icons mt-3">
                                <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                                <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="text-white"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                        <p>&copy; 2024 My Website. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
        </div >

    )
}
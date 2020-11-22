import logo from './logo.svg';
import './App.css';

var sectionStyle = {
    backgroundImage: "url('/assets/img/header-bg.jpg?h=b8466c0919756b37f84bf6f4883412b5')"
};
var contactStyle = {
    backgroundImage: "url('/assets/img/map-image.png?h=dde716a63e31eca254a82a274d4f56c0')"
};

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
                <div className="container"><a className="navbar-brand" href="#page-top">Venus Enterprises</a>
                    <button data-toggle="collapse" data-target="#navbarResponsive"
                            className="navbar-toggler navbar-toggler-right"
                            type="button" data-toogle="collapse" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto text-uppercase">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger"
                                                        href="#products">Products</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger"
                                                        href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead"
                    style={sectionStyle}>
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in"><span>Welcome To Venus Enterprises</span></div>
                        <div className="intro-heading text-uppercase"><span>It's Nice To Meet You</span></div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" role="button"
                           href="#products">Shop</a></div>
                </div>
            </header>
            <section id="products" className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="text-uppercase section-heading">products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 products-item">
                            <a className="products-link" data-toggle="modal" href="#productsModal1">
                                <div className="products-hover">
                                    <div className="products-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid"
                                     src="/assets/img/products/1-thumbnail.jpg?h=41aa7626f88f088a2c71d960df1da583"/></a>
                            <div className="products-caption">
                                <h4>Threads</h4>
                                <p className="text-muted">Illustration</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 products-item">
                            <a className="products-link" data-toggle="modal" href="#productsModal2">
                                <div className="products-hover">
                                    <div className="products-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid"
                                     src="/assets/img/products/2-thumbnail.jpg?h=e0cd73f9cd729a71c99bb73d59fdff7a"/></a>
                            <div className="products-caption">
                                <h4>Explore</h4>
                                <p className="text-muted">Graphic Design</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 products-item">
                            <a className="products-link" data-toggle="modal" href="#productsModal3">
                                <div className="products-hover">
                                    <div className="products-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid"
                                     src="/assets/img/products/3-thumbnail.jpg?h=21014624943ca4e4f89cd0f1882d6e7f"/></a>
                            <div className="products-caption">
                                <h4>Finish</h4>
                                <p className="text-muted">Identity</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 products-item">
                            <a className="products-link" data-toggle="modal" href="#productsModal4">
                                <div className="products-hover">
                                    <div className="products-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid"
                                     src="/assets/img/products/4-thumbnail.jpg?h=62e85a384b97007129548e987c155861"/></a>
                            <div className="products-caption">
                                <h4>Lines</h4>
                                <p className="text-muted">Branding</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 products-item">
                            <a className="products-link" data-toggle="modal" href="#productsModal5">
                                <div className="products-hover">
                                    <div className="products-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid img-fluid"
                                     src="/assets/img/products/5-thumbnail.jpg?h=71496ae4d377a216a250e5349e5dab7c"/></a>
                            <div className="products-caption">
                                <h4>Southwest</h4>
                                <p className="text-muted">Website Design</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 products-item">
                            <a className="products-link" data-toggle="modal" href="#productsModal6">
                                <div className="products-hover">
                                    <div className="products-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid"
                                     src="/assets/img/products/6-thumbnail.jpg?h=f641bb32de99d994a495276cef6faf04"/></a>
                            <div className="products-caption">
                                <h4>Window</h4>
                                <p className="text-muted">Photography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact"
                     style={contactStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="text-uppercase section-heading">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Venus Enter Prices</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="contactForm" noValidate="novalidate">
                                <div className="form-row">
                                    <div className="col col-md-6">
                                        <div className="form-group"><input className="form-control" type="text"
                                                                           id="name" placeholder="Your Name *"
                                                                           required=""/><small
                                            className="form-text text-danger flex-grow-1 help-block lead"></small></div>
                                        <div className="form-group"><input className="form-control" type="email"
                                                                           id="email" placeholder="Your Email *"
                                                                           required=""/><small
                                            className="form-text text-danger help-block lead"></small></div>
                                        <div className="form-group"><input className="form-control" type="tel"
                                                                           placeholder="Your Phone *"
                                                                           required=""/><small
                                            className="form-text text-danger help-block lead"/></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"><textarea className="form-control" id="message"
                                                                              placeholder="Your Message *"
                                                                              required=""/><small
                                            className="form-text text-danger help-block lead"></small></div>
                                    </div>
                                    <div className="col">
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                                                type="submit">Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;

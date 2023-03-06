import "./Footer.scss"

const Footer = ()=> {
    
    return(
        <div>
            <div className="container-fluid text-bg-secondary" id="footer">
                <div className="site-wrapper">
                    <div className="footer">
                    <div className="footer-top d-flex flex-wrap align-items-center">
                        <div className="left flex-fill align-items-center">
                            <h1>Get Our Updates Always Fast</h1>
                            <p className="mb-0 mt-2">10% off your next order when you sign up + be the first to know about new products and
                                special offers.</p>
                        </div>
                        <div className="right flex-fill">
                            <div className="subscription">
                                <input type="text" placeholder="Enter Your Email"/>
                                <button type="button" className="btn btn-secondary">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                        <div className="footer-btm mt-4 p-2">
                            <div className="d-flex">
                                <div className="">
                                    <div className="ft-l">
                                        <img className="fot-lo pb-2" src="/Images/logo-white.png" alt=""/>
                                        <p className="mt-4 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                                        <div className="social-icons d-flex pb-3">
                                            <div className="ic-wr me-2">
                                                <i className="bi bi-facebook" id="social-icon"></i>
                                            </div>
                                            <div className="ic-wr me-2">
                                                <i className="bi bi-twitter" id="social-icon"></i>
                                            </div>
                                            <div className="ic-wr me-2">
                                                <i className="bi bi-instagram" id="social-icon"></i>
                                            </div>
                                        </div>
                                        <a href="/logo.png" id="tel-icon">
                                                <span className="me-2" >
                                                    <i className="bi bi-telephone" ></i>
                                                </span>
                                                (+91)1234-5670 
                                        </a>
                                    </div>
                                </div>
                                <div className="flex-fill d-flex flex-wrap">
                                    <div className="flex-fill">
                                        <ul className="ps-0">
                                            <h3 className="mb-4">Quick Links</h3>
                                            <li>About</li>
                                            <li>Contact</li>
                                            <li>Faq</li>
                                            <li>Support</li>
                                            <li>News & Blog</li>
                                        </ul>
                                    </div>
                                    <div className="flex-fill">
                                        <ul className="ps-0">
                                            <h3 className="mb-4">Categories</h3>
                                            <li>About</li>
                                            <li>Contact</li>
                                            <li>Faq</li>
                                            <li>Support</li>
                                            <li>News & Blog</li>
                                        </ul>
                                    </div>
                                    <div className="flex-fill">
                                        <ul className="ps-0">
                                            <h3 className="mb-4">My Account</h3>
                                            <li>Account Info</li>
                                            <li>Shipping Info</li>
                                            <li>Returns</li>
                                            <li>Track Order</li>
                                            <li>Wishlist</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-bg-white" id="ft-btm">
                <div className="site-wrapper">
                    <div className="end-card d-flex  justify-content-between align-items-center">
                        <div className="copyright p-4">
                            <a href="/logo.png">Copyright 2022 Commercenxt. All rights reserved. 
                                <span>
                                    <a className="primary-text ms-1 me-1" href="/logo.png">Privacy Policy</a>
                                </span> | 
                                <span>
                                    <a className="primary-text ms-1" href="/logo.png">Terms & Conditiions</a>
                                </span></a>
                        </div>
                        <div className="payment  align-self-center">
                            <img className="payment1" src="/Images/pay.png" alt=""/>
                            <img className="payment2" src="/Images/visa.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
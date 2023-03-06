import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss"

const NavBar = ()=>{
    
    return(

            <div className="d-flex flex-wrap justify-content-between">
                <div>
                    <ul className="navbar">
                        <li className="nav-item">
                            <Link className="nav-link" to="/react/home">Home</Link>
                        </li>
                        <span className="nav-sep">|</span>
                        <li className="nav-item">
                            <Link className="nav-link" to="/react/shop">Shop</Link>
                        </li>
                        <span className="nav-sep">|</span>
                        <li className="nav-item">
                            <a className="nav-link" href="/logo.png">About</a>
                        </li>
                        <span className="nav-sep">|</span>
                        <li className="nav-item">
                            <a className="nav-link" href="/logo.png">Contact</a>
                        </li>
                        <span className="nav-sep">|</span>
                        <li className="nav-item">
                            <a className="nav-link" href="/logo.png">Order Tracking</a>
                        </li>
                    </ul>
                </div>
                <div id="nav-span" >
                    <p>For Sales & Support  
                        <a className="secondary-text ms-2" id="secondary" href="/logo.png">
                            (+91)1234-5670
                        </a>
                        <span className="nav-sep">|</span> 
                        <a className="primary-text" id="support" href="/logo.png">
                            support@comnxt.com
                        </a>
                    </p>
                </div>
            </div>
       
    );
}

export default NavBar;
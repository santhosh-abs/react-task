import React,{useState} from 'react'

import Department from './Department'
import Search from './Search'
import MyAccount from './MyAccount'
import MyCart from './MyCart'
import NavBar from './NavBar'

import "./Header.scss"

const Header = ()=>{
    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow(!show);
    };
    const Dropdown = ({ open, trigger, menu }) => {
      return (
        <div className="dropdown">
          {trigger}
          {open ? (
            <ul className="toggle">
            {menu.map((menuItem, index) => (
              <li key={index} className="toggle-item">{menuItem}</li>
            ))}
          </ul>
          ) : null}
        </div>
      );
    };

    return(

            <div className="header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-wrap" id='margin-right'>
                        <a  href="Header.jsx"><img src="/Images/logo.png" alt="logo"/></a>
                    </div>
                    <div className="" id="menu-btn" >
                            <Dropdown
                            open={show}
                            trigger={<button className="toggle-btn" onClick={handleClick}>☰</button>}
                            menu={[
                                <Department/>,
                                <Search/>,
                                <MyAccount/>,
                                <MyCart/>,
                                <NavBar/>
                            ]}/>
                    </div>
                    <div className="flex-fill"  id="menu-card" >
                        <div className="d-flex flex-wrap">
                            <div >
                                <Department/>
                            </div>
                            <div className="flex-grow-1">
                                <Search/>
                            </div>
                            <div>
                                <MyAccount/>
                            </div>
                            <div>
                                <MyCart/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Header;
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css';
import logo from "../images/logo.svg";



function Header() {
    return (
        <header className="header">
            <img src={logo} />

            <div className="menu">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* <MenuIcon/> */}
            
    
            
        </header>
    )
}

export default Header


// const CustomMenu = styled(MenuIcon)`
//     color: #fff;
//     display: none;
//     cursor: pointer;
//     font-size: 3rem;

// `

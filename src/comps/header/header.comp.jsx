import React from 'react'
import instaIcon from './insta-icon-dark-gray.png';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import {Animated} from 'react-animated-css';

const Header = () => {
    return (
        <div className="right-stuff">
        <Animated animationIn="fadeInRight" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown">
            <div className="nav">
                <div className="nav-sub">
                
                    <div className="menu-item">
                    <Link to="/" className="menu-text">>cv</Link>    
                </div>
                <div className="menu-item">
                        <Link to="/bio" className="menu-text">>bio</Link>    
                    </div>
                    <div className="menu-item">
                        <Link to="/contact" className="menu-text">>contact</Link>    
                    </div>
                    <div className="menu-item">
                        <Link to="/portfolio" className="menu-text">>portfolio</Link>    
                    </div>
                </div>
            </div>
        </Animated>
        <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown">
            <div className="socials-footer">
                <p className="footer-text"></p>
                <div className="socials-icons">
                    <a href="https://www.instagram.com">
                        <img className="socials-icon" alt="insta-icon" src={instaIcon}/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img className="socials-icon" alt="insta-icon" src={instaIcon}/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img className="socials-icon" alt="insta-icon" src={instaIcon}/>
                    </a>
        </div>
            </div> 
        </Animated>


        </div>
    )
}

export default Header;
import React from 'react';
import './portfolio.styles.scss'
import dribbble from './dribbble-4.svg'

import {Animated} from "react-animated-css";

const Portfolio = () => {
    return (
        <div className="container">
            <div className="portfolio-container">
                <p className="portfolio">
                <h2>Want to see more of my work?
                <br/>
                Check it here.</h2>
                <Animated animationIn="fadeInDown" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown">
                <img className="dribbble" alt="dribbble logo" width="300px" src={dribbble}></img>
                </Animated>
                <br/>
                
                </p>
               
            </div>
           
        </div>
    )
}

export default Portfolio;
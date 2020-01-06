import React from 'react';
//import artwork from './PORTFOLIO_STORY.png';
import portfolio from './portfolio.mp4'
import './home.styles.scss'


import Avatar from '../../comps/avatar/avatar.comp';
import {Player, ControlBar, LoadingSpinner} from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css'; 

import {Animated} from "react-animated-css";

class Home extends React.Component {
    
    constructor(props, context) {
        super(props, context)



        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        this.play = this.play.bind(this);
        }

        toggleFullscreen() {
            this.player.toggleFullscreen()
        }

        play(){
            this.player.play()
        }

        

    render() {
        console.log()
        return (
            <div className="container">
                <div className="img-container" onDoubleClick={this.toggleFullscreen}>
                    <Player 
                    loop={true}
                    ref={player => { this.player = player;}}
                    className="test"
                    fluid={false}
                    autoPlay={true}
                    src={portfolio}>
                    <LoadingSpinner />
                    <ControlBar disableCompletely={true}/>
                    </Player>
                </div>
                <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown"> 
                <Avatar/>
                </Animated>
            </div>
        )
    }
}

export default Home;
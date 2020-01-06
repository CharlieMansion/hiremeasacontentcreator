import React from 'react';
import './videos-styles.scss';
import Youtube from 'react-youtube';

class Videos extends React.Component {
    constructor() {
        super()

        this.state = {
            thumb1 : ''
        }
    }

    componentDidMount() {
            fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCkbc9Vz4VwYNLYJg_r51zLdntoEbUd-MQ&part=snippet&id=HZZyF41zrlA").then(data => data.json())
            .then(res => res.items[0].snippet.thumbnails.medium.url)
            .then(data => this.setState({thumb1:data}))
        }

    render() {
        const {thumb1} = this.state
        console.log(thumb1)
    return (
        <div className="video-sup-container">
            <div className="videos-background-container">
            <div className="videos-whole-container">
            <div className="video-container">
                <p className="vid-title">'COFFEE SHOP/DEATH BY CAFFEINE' 
                <br/>
                MUSIC VIDEO</p>
                    <div className="vid-sub-container">
                    <Youtube videoId='vnVjihYQnAs' className='youtube-vid 1'/>
                    </div>
                
            </div>
            <div className="vid-select">
            <div className="thumb-container">
                <div className="vid-thumb" style={{backgroundImage:`url(${thumb1})`,backgroundSize:"10vw 10vh"}}>
                    <div className="vid-thumb-layover">
                   {/* insert text */}
                    </div>
                </div>
                <p>'Hello, Are You <br/>Real?'</p>
            </div>
            <div className="thumb-container">
                <div className="vid-thumb" style={{backgroundImage:`url(${thumb1})`,backgroundSize:"10vw 10vh"}}>
                    <div className="vid-thumb-layover">
                   {/* insert text */}
                    </div>
                </div>
                <p>'The Vice'</p>
            </div>
            <div className="thumb-container">
                <div className="vid-thumb" style={{backgroundImage:`url(${thumb1})`,backgroundSize:"10vw 10vh"}}>
                    <div className="vid-thumb-layover">
                   {/* insert text */}
                    </div>
                </div>
                <p>'You Can't Stay'</p>
            </div>
                
            </div>
           </div>
           </div>
        </div>
    )
   }
}

export default Videos;
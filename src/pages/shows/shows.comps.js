import React from 'react';
import './shows.styles.scss';


class Shows extends React.Component {
    constructor() {
        super()

        this.state = {
            shows : ''
        }
    }

  
    render() {
       // const {shows} = this.state
    return (
        <div className="shows-sup-container">
            <div className="shows-background-container">
                <div className="shows-whole-container">
                    <div className="shows-container">
                        Hi!
                    </div>
                </div>
            </div>
        </div>
        
    )
   }
}

export default Shows
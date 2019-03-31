import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './index.css';


class Welcome extends Component {
  render() {
    return (
      <div id="welcome" className="welcome">
        
        
        <div className="visual topArea">
            <h2 className="visual_title">
              <p className="title_typewriter show_typewriter">
                <span className="letter">The wonderful, amazing web, with me.</span>
              </p>
              <p className="main_title show_delay">
                  PORTFOLIO
              </p>
              
              <div className="scroll_text show_delayed_bounce">
                <p >scroll down</p>
                <Icon name="angle double down" />
              </div>
            </h2>
        </div>


      </div>           
    );
  }
}

export default Welcome;

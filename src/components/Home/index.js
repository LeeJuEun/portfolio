import React, { Component } from 'react';
import './index.css';
import { Icon } from 'semantic-ui-react'

class ScrollButton extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
    return (
      <a title='Back to top' className='scroll' 
              onClick={ () => { this.scrollToTop(); }}>
        <Icon name="home" />
      </a>
    );
   }
} 

class Home extends Component { 
  render () {
    return this.props.open && (
    <div className="home">
      <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    </div>
    );
  }
}

export default Home;
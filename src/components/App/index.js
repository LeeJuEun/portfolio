import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';

import './index.css';
import Home from '../Home';
import Menu from '../Menu';
import Welcome from '../Welcome';
import Info from '../Info';
import WorkList from '../WorkList';
import Footer from '../Footer';

class App extends Component {
  state = {
    works: [],
    openHome: false,
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/works.json`)
      .then(res => res.json())
      .then(works => {
        this.setState({
          ...this.state,
          works: works,
        })
      })
      .catch(console.error)

    window.addEventListener('scroll', this.checkHomeOpen);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkHomeOpen);
  }

  _renderSpinner() {
    return (
      <div style={{display:'block', backgroundColor:'red', zIndex:'99'}}>
        Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...
      </div>
    )
  }

  checkHomeOpen = () => {
    if (!this.welcome) return;

    const welcomeBottom = ReactDOM.findDOMNode(this.welcome).getBoundingClientRect().bottom;

    this.setState({
      ...this.state,
      openHome: welcomeBottom < 0,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.openHome === nextState.openHome) {
      return false;
    }

    return true;
  }


  render() {
    if (!this.state.works) {
      return (
      <div className="App">
        { this._renderSpinner() }
      </div>
      );
    }

    return (
      <div className="App">
        <Home ref={input => {this.home=input}} open={this.state.openHome} />
        <Menu ref={input => {this.menu=input}} />
        <Welcome ref={input => {this.welcome=input}} />
        <Info ref={input => {this.info=input}} />
        <WorkList works={this.state.works} ref={input => {this.worklist=input}} />
        <Footer />
      </div>
    );
  }
}

export default App;

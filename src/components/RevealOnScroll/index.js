import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Animated from "animated/lib/targets/react-dom";

const DefaultThresholdPortrait = 0.7;
const DefaultThresholdRandscape = 0.8;

const DefaultOffset = 300;

class RevealOnScroll extends Component {
  state = {
    mounted: false,
    animated: false,
    offset: new Animated.Value(DefaultOffset),
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);

    const offset = this.props.i % 2 === 0 ? DefaultOffset : -1 * DefaultOffset;

    console.log("this.props.key % 2", this.props.i % 2);

    this.setState({
      ...this.state,
      mounted: true,
      offset: new Animated.Value(offset),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);

    this.setState({
      ...this.state,
      mounted: false,
    });
  }

   onScroll = (e) => { 
    if (!this.state || !this.state.mounted) {
      return;
    }

    const {
      thresholdPortrait,
      thresholdRandscape,
    } = this.props;

    const threshold = window.innerHeight < window.innerWidth ?
      thresholdRandscape :
      thresholdPortrait;

    const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top;

    if(top < window.innerHeight * threshold && !this.state.animated) {
      Animated.timing(this.state.offset, {
        toValue: 0,
        // TODO: 시간 잘 조절하기

      }).start();
      
      Animated.timing(this.state.opacity, {
        toValue: 1
      }).start();

      this.setState({
        ...this.state,
        animated: true,
      });      
    }
  }

  render() {
    const {
      mounted,
      offset,
    } = this.state;
    
    if (mounted) {
      console.log("this.state.offset", this.state.offset)
      var t = this.state.offset;

      return (
        <Animated.div
          className="circle"
          style={{
            position: "relative",
            left: this.state.offset,
            opacity: this.state.opacity
          }}>
          { this.props.children }
        </Animated.div>
      );
    }

    return <div></div>;
  }

  static defaultProps = {
    thresholdPortrait: DefaultThresholdPortrait,
    thresholdRandscape: DefaultThresholdRandscape,
  }
}


export default RevealOnScroll;
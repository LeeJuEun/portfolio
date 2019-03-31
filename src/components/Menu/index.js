import React, { Component } from 'react';
import './index.css';
import Drawer from 'react-motion-drawer';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Icon } from 'semantic-ui-react'

class Menu extends Component {
  state = {
    open: false,
    noTouchOpen: false,
    noTouchClose: false,
  }

  onChange = () => {
    this.setState({
      ...this.state,
      open: !this.state.open,
    })
  }

  onClose= () => {
    this.setState({
      ...this.state,
      open: !this.state.open,
    })
  }

  render() {
    const { open } = this.state;

    const drawerProps = {
      overlayColor: "rgba(255,255,255,0.6)",
      drawerStyle: {
        background: "#F9F9F9",
        boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px",
      },
      handleWidth: 5,
    };

    return (
      <div className="menu">
        <a className="open_menu" onClick={this.onChange}>
          <Icon name="list layout" />
        </a>

        <Drawer 
          {...drawerProps}
          open={open}
          right={true}
        >
          <ul>
            <li><AnchorLink onClick={this.onClose} href="#welcome">Home</AnchorLink></li>
            <li><AnchorLink onClick={this.onClose} href="#info">About Me</AnchorLink></li>
            <li><AnchorLink onClick={this.onClose} href="#worklist">Work</AnchorLink></li>
          </ul>
        </Drawer>
      </div>
    );
  }
}

export default Menu;

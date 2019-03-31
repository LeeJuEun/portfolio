import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

import './index.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>Contact</h2>

        <ul>
          <li>
            <a href="mailto:wndms0116@google.com">
              <Icon name="mail" />
              wndms0116@google.com
            </a>
          </li>
          <li>
            <a href="tel:01075384993">
              <Icon name="phone volume" />
              010-7538-4993
            </a>
          </li>
          <li>
            <a href="https://github.com/jueuni">
              <Icon name="github" />
              @jueuni
            </a>
          </li>
        </ul>
        <div className="footer_bottom"><Icon name="copyright outline" />2019 JuEun Lee</div>
      </div>
    );
  }
}

export default Footer;

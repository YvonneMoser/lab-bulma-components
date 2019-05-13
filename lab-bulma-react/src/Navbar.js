
import React from "react";
import './App.css';
import CoolButton from './CoolButton.js'


class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
           <CoolButton isSmall isDanger className="is-rounded my-class">Sign Up</CoolButton>
           <CoolButton isSmall isSuccess>Log In</CoolButton>
        </div>
      </div>
    </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
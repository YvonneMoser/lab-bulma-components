
import React from "react";
import './App.css';
import CoolButton from './CoolButton.js'
import Navbar from './Navbar.js';
import FormField from './FormField.js';


class Signup extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Your Password" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>

      </div>
    );
  }
}

export default Signup;
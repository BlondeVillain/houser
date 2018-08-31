import React, { Component } from 'react';

export default class Wizard extends Component {
  constructor(){
    super()
    this.state = {
        Address: '',
        City: '',
        State: '',
        Zipcode: '',
        Cancel: false,
        Complete: false,
      }
    }
  
    render() {
      return (
        <div>
        Wizard
        <input>Address</input>
        <input>City</input>
        <input>State</input>
        <input>Zipcode</input>
        <button>Cancel</button>
        <button>Complete</button>
        </div>
        );
      }
    }

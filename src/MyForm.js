import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const baseURL = "http://52.10.102.239/tickets/"

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      age: 4
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.isGoing}  ${this.state.age} ${this.state.numberOfGuests}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />
        </label>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



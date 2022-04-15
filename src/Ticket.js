import React from "react";
import axios from "axios";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const baseURL = "http://52.10.102.239/tickets/"

class Ticket extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        title: "",
        description: ""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.handleReset = this.handleReset.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      axios.post(baseURL, {
        email: this.state.email,
        title: this.state.title,
        description: this.state.description
      })
      alert(`Veuillez confirmer!`);
      window.location.reload()
      event.preventDefault();
    }
  

    render() {
      return (
        <form className=" p-3 mt-3 shadow mb-5 rounded" onSubmit={this.handleSubmit}>
          <div className="text-center">
            <h1 className="mb-4">Create ticket</h1>
          </div>
          
          <div className="form-label-group mb-3">
            <input onChange={ this.handleInputChange } name="email" value={this.state.email} type="email" id="user_email" className="form-control" placeholder="Email" required/>
            <label htmlFor="user_email">Email</label>
          </div>
      
          <div className="form-label-group mb-3">
            <input onChange={ this.handleInputChange } name="title" value={this.state.title}  type="text" id="ticket_title" className="form-control" placeholder="Title" required/>
            <label htmlFor="ticket_title">Title</label>
          </div>

          <div className="form-label-group mb-3">
            <textarea onChange={ this.handleInputChange } name="description" value={this.state.description}  className="form-control" id="ticket_description" rows="3" placeholder="Description" required></textarea>
            <label htmlFor="ticket_description">Description</label>
          </div>                       
      
          <div className="form-group row">
            <div className="col-6 offset-6 text-center">
              <button type="submit" className="btn btn-lg btn-block btn-primary create-ticket">Submit</button>
            </div>
          </div>
        </form>
      );
    }
}

export default Ticket;
  
  
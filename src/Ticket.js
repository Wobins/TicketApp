import React from "react";
import ReactDOM from 'react-dom';


class Ticket extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        title: "",
        description: ""
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ');
      event.preventDefault();
    }
  
    render() {
      return (
        <form class="border border-dark p-3 mt-2" onSubmit={this.handleSubmit}>
          <div class="text-center">
              <h1>Create ticket</h1>
          </div>
          
          <div class="form-label-group mb-3">
              <input type="email" id="user_email" class="form-control" placeholder="Email"/>
              <label for="user_email">Email</label>
          </div>
      
          <div class="form-label-group mb-3">
              <input type="text" id="ticket_title" class="form-control" placeholder="Title"/>
              <label for="ticket_title">Title</label>
          </div>

          <div class="form-label-group mb-3">
              <textarea class="form-control" id="ticket_description" rows="3" placeholder="Description"></textarea>
              <label for="ticket_description">Description</label>
          </div>                       
      
          <div class="form-group row">
              <div class="col-6 text-center">
                <button onReset={ this.handleReset } type="reset" class="btn btn-lg btn-warning btn-block">Reset</button>
              </div>
              <div class="col-6 text-center">
                  <button onSubmit={ this.handleSubmit } type="submit" class="btn btn-lg btn-block btn-primary create-ticket">Submit</button>
              </div>
          </div>
        </form>
      );
    }
}

export default Ticket;
  
  
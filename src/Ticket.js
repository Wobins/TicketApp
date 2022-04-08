import React from "react";

const baseURL = "http://52.10.102.239/ticket/create"

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
      this.setState({
        email: event.target.value,
        title: event.target.value,
        description: event.target.value
      });
    }

    handleReset(event) {
      this.setState({
        email: "",
        title: "",
        description: ""
      });
    }
  
    handleSubmit(event) {
      this.handleChange(event)
      alert(`A name was submitted: ${this.props.email} ${this.state.title}`);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="border border-dark p-3 mt-2" onSubmit={this.handleSubmit}>
          <div className="text-center">
            <h1>Create ticket</h1>
          </div>
          
          <div className="form-label-group mb-3">
            <input onChange={ this.handleChange } type="email" id="user_email" className="form-control" placeholder="Email"/>
            <label htmlFor="user_email">Email</label>
          </div>
      
          <div className="form-label-group mb-3">
            <input onChange={ this.handleChange } type="text" id="ticket_title" className="form-control" placeholder="Title"/>
            <label htmlFor="ticket_title">Title</label>
          </div>

          <div className="form-label-group mb-3">
            <textarea onChange={ this.handleChange } className="form-control" id="ticket_description" rows="3" placeholder="Description"></textarea>
            <label htmlFor="ticket_description">Description</label>
          </div>                       
      
          <div className="form-group row">
              <div className="col-6 text-center">
                <button onReset={ this.handleReset } type="reset" className="btn btn-lg btn-warning btn-block">Reset</button>
              </div>
              <div className="col-6 text-center">
                <button type="submit" className="btn btn-lg btn-block btn-primary create-ticket">Submit</button>
              </div>
          </div>
        </form>
      );
    }
}

export default Ticket;
  
  
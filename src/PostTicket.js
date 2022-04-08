import axios from 'axios';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

const baseURL = "http://52.10.102.239/tickets";

const ressource = axios.get(baseURL);
// const expression = "(e) => this.handleValidateTicket(ticket.id, e)";

class PostTicket extends React.Component {
  // state = {
  //   tickets: []
  // }
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };

    this.handleDeleteTicket = this.handleDeleteTicket.bind(this);
  }

  componentDidMount() {
    axios.get(baseURL)
      .then(res => {
        const tickets = res.data;
        this.setState({ tickets });
      })
  }

  handleDeleteTicket(id, event) {
    axios.put(`${baseURL}/delete/${id}`).then((response) => {
      this.setState({tickets: this.deleteTicket(id)})
    });    
  }

  handleValidateTicket(id, event) {
    axios.put(`${baseURL}/update/${id}`).then((response) => {
      this.setState({tickets: this.deleteTicket(id)})
    });
  }

  deleteTicket(id) {
    var filtered = this.state.tickets.filter(function(value, index, arr){ 
      return value.id != id;
    });
    return filtered
  }

  

  checkStatus (validationStatus, el) {
    if (validationStatus == 1) {
      return (
        <button type="button" onClick={(e) => this.handleValidateTicket(el, e)} className="btn btn-sm btn-success" disabled>Valider</button>
      );
    } else {
      return (
        <button type="button" onClick={(e) => this.handleValidateTicket(el, e)} className="btn btn-sm btn-success">Valider</button>
      );
    }
  }


  render() {
    return (
      this.state.tickets
            .map(ticket =>
              <React.Fragment>
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.email}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.description}</td>
                  <td>
                    <div className="row">
                      <div className="col-6 text-center">
                        {this.checkStatus(ticket.status, ticket.id)}
                      </div>
                      <div className="col-6 text-center">
                        <button type="button" onClick={(e) => this.handleDeleteTicket(ticket.id, e)} className="btn btn-sm btn-danger">Supprimer</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            )
      
    )
  }
}

export default PostTicket;

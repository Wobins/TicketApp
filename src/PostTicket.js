import axios from 'axios';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

const baseURL = "http://52.10.102.239/tickets";

const ressource = axios.get(baseURL);

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

  handleDeleteTicket(event) {
    axios.put(`${baseURL}/delete/8`).then((response) => {
      window.location.reload()
      console.log(response.data);
      window.location.reload()
    });    
  }

  handleValidateTicket(event) {
    axios.put(`${baseURL}/update/15`, {
      status: 1
    }).then((response) => {
      window.location.reload()
      console.log(response.data);
      window.location.reload()
    });
  }


  render() {
    return (
      this.state.tickets
            .map(ticket =>
              <React.Fragment>
                <tr>
                  <td key={ticket.id}>{ticket.id}</td>
                  <td key={ticket.email}>{ticket.email}</td>
                  <td key={ticket.title}>{ticket.title}</td>
                  <td key={ticket.description}>{ticket.description}</td>
                  <td>
                    <div className="row">
                      <div className="col-6 text-center">
                        <button type="button" onClick={this.handleValidateTicket} className="btn btn-sm btn-success">Valider</button>
                      </div>
                      <div className="col-6 text-center">
                        <button type="button" onClick={this.handleDeleteTicket} className="btn btn-sm btn-danger">Supprimer</button>
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

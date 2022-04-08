import axios from 'axios';
import React from 'react';

const baseURL = "http://52.10.102.239/tickets/";

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
    alert("Hello supprimer")
    // axios.put(`${baseURL}/delete/4`)
    axios.put("http://52.10.102.239/tickets/delete/2")
    window.location.reload()
  }

  render() {
    return (
      this.state.tickets
            .map(ticket =>
              <React.Fragment>
                <tr>
                  <td>{ticket.id}</td>
                  <td>{ticket.email}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.description}</td>
                  <td>
                    <div className="row">
                      <div className="col-6 text-center">
                        <button type="button" className="btn btn-sm btn-success">Valider</button>
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

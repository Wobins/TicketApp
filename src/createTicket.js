import React, { Component } from "react";
import ticket from './getTicket'


const { email, title, description } = ticket

// class Ticket extends Component {
//     constructor(ticket) {
//         super(ticket);
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <h1>ticke</h1>
//                 <h2>Hello</h2>
//             </React.Fragment>
//         );
//     }
// }


function Display() {
    <React.Fragment>
      <h1>{email}</h1>
      <h2>{title}</h2>
    </React.Fragment>
}
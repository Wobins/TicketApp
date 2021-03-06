import React from 'react';
import './index.css';
import * as ReactDOM from 'react-dom/client';
import PostTicket from './PostTicket';
import Ticket from './Ticket';
import reportWebVitals from './reportWebVitals';


const newTicket = ReactDOM.createRoot(
  document.getElementById('newTicket')
);

const allTickets = ReactDOM.createRoot(
  document.getElementById('allTickets')
);


newTicket.render(
  <Ticket />
);

allTickets.render(
  <PostTicket />
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

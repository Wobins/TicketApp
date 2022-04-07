import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from './Ticket';
import reportWebVitals from './reportWebVitals';


const el = ReactDOM.createRoot(
  document.getElementById('hi')
);

const yip = ReactDOM.createRoot(
  document.querySelector('#example')
);

el.render(
  <React.StrictMode>
    <Item />
  </React.StrictMode>
);


yip.render(
  <React.StrictMode>
    <Item />
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

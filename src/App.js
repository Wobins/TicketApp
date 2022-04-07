import React, { Component } from "react";
// import ticket from "./getTicket" 

const axios = require('axios');
const el = axios.get("http://52.10.102.239/tickets/")


function App() {
  return (
    <React.Fragment>
      
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </React.Fragment>
    
  );
}

export default App;






export default Item;

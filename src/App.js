// import React, { Suspense } from "react";
import axios from 'axios';
import React from 'react';

// const axios = require('axios');

const baseURL = "http://52.10.102.239/tickets/";

const ressource = axios.get(baseURL);

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.table(post[0].email)

  return (
    <React.Fragment>
        <tr>
          <th scope="row">{ post[0].id }</th>
          <td>{ post[0].email }</td>
          <td>{ post[0].title }</td>
          <td>{ post[0].description }</td>
          <td><button>Hello</button></td>
        </tr>
        <tr>
          <th scope="row">{ post[1].id }</th>
          <td>{ post[1].email }</td>
          <td>{ post[1].title }</td>
          <td>{ post[1].description }</td>
          <td><button>Hello</button></td>
        </tr>
      </React.Fragment>
  );
}


export default App;

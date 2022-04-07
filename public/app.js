const axios = require('axios')
const year = document.querySelector('#year');
const d = new Date();
year.innerHTML = d.getFullYear();


const titre = axios.get("http://52.10.102.239/tickets/")

year.append(titre.email)
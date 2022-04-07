const email = ReactDOM.createRoot(
    document.getElementById('user_email').value
);

const title = ReactDOM.createRoot(
    document.getElementById('ticket_title').value
);

const description = ReactDOM.createRoot(
    document.getElementById('ticket_description').value
);

const ticket = {
    email: email, 
    title: title, 
    description: description
}

export default ticket;


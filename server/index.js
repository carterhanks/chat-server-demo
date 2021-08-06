const express = require('express');
const msgController = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static('public/build'));

const messageBaseURL = '/api/messages';

app.post(messageBaseURL, msgController.create);
app.get(messageBaseURL, msgController.read);
app.put(`${messageBaseURL}/:id`, msgController.update);
app.delete(`${messageBaseURL}/:id`, msgController.delete);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Slappin' on ${PORT}!`);
});
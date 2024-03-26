// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Todo list array
let todos = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/addTodo', (req, res) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    res.redirect('/');
});

app.get('/getTodos', (req, res) => {
    res.send(todos);
});

// Start server
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});
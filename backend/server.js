const express = require('express'); // Importing express
const app = express(); // Creating an express app
const wiki = require('./routes/wiki'); // Importing the wiki route module

// Use the wiki route module when requests are made to the /wiki path
app.use('/wiki', wiki);

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
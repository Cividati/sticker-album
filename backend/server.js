import express from 'express'; // Importing express
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import wiki from './routes/wiki.js'; // Importing the wiki route module

dotenv.config(); // Load environment variables from .env file

const app = express(); // Creating an express app

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();

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
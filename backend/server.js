import express from 'express'; // Importing express
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import wiki from './routes/wiki.js'; // Importing the wiki route module
import find from './routes/find.js'; // Importing the find route module

dotenv.config(); // Load environment variables from .env file

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();

const app = express(); // Creating an express app

// Use the wiki route module when requests are made to the /wiki path
app.use('/wiki', wiki);
app.use('/find', find);

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import express from 'express'; // Importing express
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import wiki from './routes/wiki.js'; // Importing the wiki route module
import run from './routes/find.js'; // Importing the find route module

dotenv.config(); // Load environment variables from .env file

const app = express(); // Creating an express app

// Use the wiki route module when requests are made to the /wiki path
app.use('/wiki', wiki);

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Create a route that handles the find request
app.get('/find', async (req, res) => {
  const { databaseName, collectionName, title } = req.query;
  if (!databaseName || !collectionName || !title) {
    return res.status(400).send('Database name, collection name, and title query parameters are required');
  }
  try {
    const movie = await run(databaseName, collectionName, title);
    res.json(movie);
  } catch (error) {
    res.status(500).send('Error fetching movie');
  }
});

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const client = new MongoClient(process.env.MONGO_URI);

async function run(databaseName, collectionName, title) {
  try {
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    // Query for a movie that has the specified title
    const query = { title: title };
    const options = {
      // Sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };
    // Execute query
    const movie = await collection.findOne(query, options);
    // Print the document returned by findOne()
    console.log(movie);
    return JSON.parse(JSON.stringify(movie)); // Ensure no circular references
  } finally {
    await client.close();
  }
}

export default run;
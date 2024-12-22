import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'The Room'
    const query = { title: "The Room" };
    const options = {
      // Sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };
    // Execute query
    const movie = await movies.findOne(query, options);
    // Print the document returned by findOne()
    console.log(movie);
  } finally {
    await client.close();
  }
}

export default run;
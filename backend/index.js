import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { initializeDatabase } from "./intializeDatabase.js";
import {
  getMostPopularDecadeHelper,
  getPeakPopularityHelper,
  getBirthCountByCenturyHelper,
} from "./helpers.js";

async function initServer() {
  // initialize express and Apollo(GraphQL) server
  const app = express();
  app.use(cors());
  dotenv.config();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.use((req, res) => {
    console.log("🚀  Apollo Server Successfully Started");
  });
  const PORT = process.env.PORT || 5000;
  // connect to MongoDB Database
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    //await initializeDatabase();
    console.log("Successfully Connected to MongoDB Database");
    //await getMostPopularDecadeHelper("Michael");

    await getBirthCountByCenturyHelper("Michael");
  } catch (error) {
    console.log("Error Connecting to the MongoDB Database: ", error);
  }

  app.listen(PORT, () => {
    console.log(`Express Server Successfully Running on Port: ${PORT}`);
  });
}

/*
TODO:
- find a large dataset about something(recipes, movies, etc)
- create a MongoDB model to replicate an entry in this dataset
- create a function to put this dataset into the MongoDB database using the model that I created
- create a typeDEF type replicating this model, and a query to return this model *getRecipes=[Recipe]* for example
- in your resolver function, create an asynchronous funcition that returns the wanted collection *Recipes* for example
*/

initServer();

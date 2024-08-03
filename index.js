import { ApolloServer } from "apollo-server";
import { application } from './application.js'
import axios from "axios";

process.loadEnvFile()

const executor = application.createApolloExecutor()
const schema = application.schema

const server = new ApolloServer({ 
  schema,
  executor,
  introspection: true,
  context: async ({ req }) => {
    const spotifyApi = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      headers: {
        'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}`
      }
    });

    const offset = req.query.offset || 0;
    const limit = req.query.limit || 15; 

    return { spotifyApi, offset, limit };
  }
});

server.listen().then(({ url }) => {
  {
    console.log(`🚀 Server ready at ${url}`);
  }
});
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
  context: async () => {
    const spotifyApi = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      headers: {
        'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}`
      }
    });

    return { spotifyApi };
  }
});

server.listen().then(({ url }) => {
  {
    console.log(`🚀 Server ready at ${url}`);
  }
});
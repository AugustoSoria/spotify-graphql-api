import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import axios from "axios";

process.loadEnvFile()

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
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
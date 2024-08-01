import { ApolloError } from "apollo-server";

const resolvers = {
  Query: {
    getCategories: async (_, { offset, limit }, { spotifyApi }) => {
      try {
        const response = await spotifyApi.get('/browse/categories', {
          params: { offset, limit, locale: "es_ARG" }
        });
        return response.data.categories;
      } catch (error) {
        throw new ApolloError('Failed to get artist', error.response.status, {
          originalError: error
        });
      }
    },
    getArtist: async (_, { id }, { spotifyApi }) => {
      try {
        const response = await spotifyApi.get('/artists/' + id);
        return response.data;
      } catch (error) {
        throw new ApolloError('Failed to get artist', error.response.status, {
          originalError: error
        });
      }
    }
  },
};

export default resolvers;
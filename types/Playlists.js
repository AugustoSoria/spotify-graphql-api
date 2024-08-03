import { ApolloError } from 'apollo-server';
import { createModule, gql } from 'graphql-modules'

export const playlistsModule = createModule({
  id: 'playlists-module',
  typeDefs: [
    gql`
      type Playlists {
        message: String
        playlists: PaginatedItems!
      }

      type Query {
        getPlaylistsByCategory(id: ID, offset: Int, limit: Int): Playlists
      }`
  ],
  resolvers: {
    Query: {
      getPlaylistsByCategory: async (_, { id }, { spotifyApi, offset, limit }) => {
        try {
          const response = await spotifyApi.get(`/browse/categories/${id}/playlists`, {
            params: { offset, limit }
          });
          return response.data;
        } catch (error) {
          throw new ApolloError('Failed to get playlists', error.response.status, {
            originalError: error
          });
        }
      },
    }
  }
})
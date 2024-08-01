import { createModule, gql } from 'graphql-modules'

export const artistModule = createModule({
  id: 'artist-module',
  typeDefs: [
    gql`
      type Artist {
        external_urls: ExternalUrls
        followers: Followers
        genres: [String]
        href: String
        id: ID
        images: [Image]
        name: String
        popularity: Int
        type: String
        uri: String
      }

      type Query {
        getArtist(id: ID): Artist
      }`
  ],
  resolvers: {
    Query: {
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
    }
  }
})
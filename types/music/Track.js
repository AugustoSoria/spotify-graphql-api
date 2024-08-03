import { ApolloError } from 'apollo-server';
import { createModule, gql } from 'graphql-modules'

export const trackModule = createModule({
  id: 'track-module',
  typeDefs: [
    gql`
      type Track {
        album: Album
        artists: [Artist]
        available_markets: [String]
        disc_number: Int
        duration_ms: Int
        explicit: Boolean
        external_ids: ExternalIds
        external_urls: ExternalUrls
        href: String
        id: String
        is_playable: Boolean
        restrictions: Restrictions
        name: String
        popularity: Int
        preview_url: String
        track_number: Int
        type: String
        uri: String
        is_local: Boolean
      }

      type Query {
        getTracksByPlaylist(id: ID, offset: Int, limit: Int): PaginatedItems
      }`
  ],
  resolvers: {
    Query: {
      getTracksByPlaylist: async (_, { id }, { spotifyApi, offset, limit }) => {
        try {
          const response = await spotifyApi.get(`playlists/${id}/tracks`, {
            params: { offset, limit }
          });
          return response.data;
        } catch (error) {
          throw new ApolloError('Failed to get tracks', error.response.status, {
            originalError: error
          });
        }
      },
    }
  }
})
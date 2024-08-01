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
      }`
  ],
  resolvers: {
    Query: {}
  }
})
import { createModule, gql } from 'graphql-modules'

export const albumModule = createModule({
  id: 'album-module',
  typeDefs: [
    gql`
      type Album {
        album_type: String
        total_tracks: Int
        available_markets: [String]
        external_urls: ExternalUrls
        href: String
        id: String
        images: [Image]
        name: String
        release_date: String
        release_date_precision: String
        restrictions: Restrictions
        type: String
        uri: String
        artists: [Artist]
        copyrights: [Copyright]
        external_ids: ExternalIds
        genres: [String]
        label: String
        popularity: Int
    }`
  ],
  resolvers: {
    Query: {}
  }
})
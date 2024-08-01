import { createModule, gql } from 'graphql-modules'

export const followersModule = createModule({
  id: 'followers-module',
  typeDefs: [
    gql`
      type Followers {
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
      }`
  ],
  resolvers: {
    Query: {}
  }
})
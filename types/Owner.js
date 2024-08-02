import { createModule, gql } from 'graphql-modules'

export const ownerModule = createModule({
  id: 'owner-module',
  typeDefs: [
    gql`
      type Owner {
        href: String
        id: String
        type: String
        uri: String
        display_name: String
        followers: Followers
        external_urls: ExternalUrls
      }`
  ],
  resolvers: {
    Query: {}
  }
})
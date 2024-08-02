import { createModule, gql } from 'graphql-modules'

export const addedByModule = createModule({
  id: 'added-by-module',
  typeDefs: [
    gql`
      type AddedBy {
        href: String
        id: String
        type: String
        uri: String
        external_urls: ExternalUrls
      }`
  ],
  resolvers: {
    Query: {}
  }
})
import { createModule, gql } from 'graphql-modules'

export const externalIdsModule = createModule({
  id: 'external-ids-module',
  typeDefs: [
    gql`
      type ExternalIds {
        isrc: String
        ean: String
        upc: String
      }`
  ],
  resolvers: {
    Query: {}
  }
})
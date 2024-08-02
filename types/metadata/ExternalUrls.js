import { createModule, gql } from 'graphql-modules'

export const externalUrlsModule = createModule({
  id: 'external-urls-module',
  typeDefs: [
    gql`
      type ExternalUrls {
        spotify: String
      }`
  ],
  resolvers: {
    Query: {}
  }
})
import { createModule, gql } from 'graphql-modules'

export const copyrightModule = createModule({
  id: 'copyright-module',
  typeDefs: [
    gql`
      type Copyright {
        text: String
        type: String
      }`
  ],
  resolvers: {
    Query: {}
  }
})

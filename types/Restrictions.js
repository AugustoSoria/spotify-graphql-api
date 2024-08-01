import { createModule, gql } from 'graphql-modules'

export const restrictionsModule = createModule({
  id: 'restrictions-module',
  typeDefs: [
    gql`
      type Restrictions {
        reason: String
      }`
  ],
  resolvers: {
    Query: {}
  }
})
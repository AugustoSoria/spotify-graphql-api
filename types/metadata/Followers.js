import { createModule, gql } from 'graphql-modules'

export const followersModule = createModule({
  id: 'followers-module',
  typeDefs: [
    gql`
      type Followers {
        href: String
        total: Int
      }`
  ],
  resolvers: {
    Query: {}
  }
})
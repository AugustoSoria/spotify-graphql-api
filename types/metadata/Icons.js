import { createModule, gql } from 'graphql-modules'

export const iconsModule = createModule({
  id: 'icons-module',
  typeDefs: [
    gql`
      type Icons {
        url: String
        height: Int
        width: Int
      }`
  ],
  resolvers: {
    Query: {}
  }
})
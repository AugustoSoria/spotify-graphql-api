import { createModule, gql } from 'graphql-modules'

export const imageModule = createModule({
  id: 'image-module',
  typeDefs: [
    gql`
      type Image {
        url: String
        height: Int
        width: Int
      }`
  ],
  resolvers: {
    Query: {}
  }
})

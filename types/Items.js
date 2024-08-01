import { createModule, gql } from 'graphql-modules'

export const itemsModule = createModule({
  id: 'items-module',
  typeDefs: [
    gql`
      type Items {
        href: String
        id: String
        name: String
        icons: [Icons]
      }`
  ],
  resolvers: {
    Query: {}
  }
})
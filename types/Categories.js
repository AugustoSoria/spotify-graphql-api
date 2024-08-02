import { createModule, gql } from 'graphql-modules'

export const categoriesModule = createModule({
  id: 'categoriesmodule',
  typeDefs: [
    gql`
      type categories {
        categories: PaginatedItems!
      }`
  ],
  resolvers: {
    Query: {}
  }
})

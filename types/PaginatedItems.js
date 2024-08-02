import { createModule, gql } from 'graphql-modules'

export const paginatedItemsModule = createModule({
  id: 'paginated-items-module',
  typeDefs: [
    gql`
      type PaginatedItems implements PaginatedResponse {
        href: String!
        limit: Int!
        next: String
        offset: Int!
        previous: String
        total: Int!
        items: [Items!]!
      }`
  ],
  resolvers: {
    Query: {}
  }
});
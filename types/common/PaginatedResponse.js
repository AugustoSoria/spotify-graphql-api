import { createModule, gql } from 'graphql-modules'

export const paginatedResponseModule = createModule({
  id: 'paginated-response-module',
  typeDefs: [
    gql`
      interface PaginatedResponse {
        href: String
        limit: Int
        next: String
        offset: Int
        previous: String
        total: Int
      }`
  ],
  resolvers: {
    Query: {}
  }
})

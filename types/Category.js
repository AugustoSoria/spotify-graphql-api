import { ApolloError } from 'apollo-server';
import { createModule, gql } from 'graphql-modules'

export const categoryModule = createModule({
  id: 'category-module',
  typeDefs: [
    gql`
      type Category {
        href: String
        limit: Int
        next: String
        offset: Int
        previous: String
        total: Int
        items: [Items]
      }

      type Query {
        getCategories(offset: Int, limit: Int): Category
      }`
  ],
  resolvers: {
    Query: {
     getCategories: async (_, { offset, limit }, { spotifyApi }) => {
      try {
        const response = await spotifyApi.get('/browse/categories', {
          params: { offset, limit, locale: "es_ARG" }
        });
        return response.data.categories;
      } catch (error) {
        throw new ApolloError('Failed to get artist', error.response.status, {
          originalError: error
        });
      }
     }
    }
  }
})
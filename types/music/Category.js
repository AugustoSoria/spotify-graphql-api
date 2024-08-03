import { ApolloError } from 'apollo-server';
import { createModule, gql } from 'graphql-modules'

export const categoryModule = createModule({
  id: 'category-module',
  typeDefs: [
    gql`
      type Category {
        href: String
        id: String
        name: String
        icons: [Icons]
      }

      type Query {
        getCategories(offset: Int, limit: Int): Category
      }`
  ],
  resolvers: {
    Query: {
     getCategories: async (_, {}, { spotifyApi, offset, limit }) => {
      try {
        const response = await spotifyApi.get('/browse/categories', {
          params: { offset, limit, locale: "es_ARG" }
        });
        return response.data.categories;
      } catch (error) {
        throw new ApolloError('Failed to get category', error.response.status, {
          originalError: error
        });
      }
     }
    }
  }
})
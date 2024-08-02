import { createModule, gql } from 'graphql-modules'

export const itemsModule = createModule({
  id: 'items-module',
  typeDefs: [
    gql`union Items = Playlist | Album | Category`
  ],
  resolvers: {
    Query: {},
    Items: {
      __resolveType(obj, context, info) {
        if (obj.type === 'playlist') return 'Playlist';
        if (obj.type === 'album') return 'Album';
        if (obj.type === 'category') return 'Category';
        return null;
      }
    }
  }
})
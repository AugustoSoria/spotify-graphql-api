import { createModule, gql } from 'graphql-modules'

export const videoThumbnailModule = createModule({
  id: 'video-thumbnail-module',
  typeDefs: [
    gql`
      type VideoThumbnail {
        url: String
      }`
  ],
  resolvers: {
    Query: {}
  }
})
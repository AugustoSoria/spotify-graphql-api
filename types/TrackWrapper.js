import { createModule, gql } from 'graphql-modules'

export const trackWrapperModule = createModule({
  id: 'track-wrapper-module',
  typeDefs: [
    gql`
      type TrackWrapper {
        added_at: String
        is_local: Boolean
        primary_color: String
        video_thumbnail: VideoThumbnail
        track: Track
        added_by: AddedBy
      }`
  ],
  resolvers: {
    Query: {}
  }
})
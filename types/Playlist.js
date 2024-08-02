import { createModule, gql } from 'graphql-modules'

export const playlistModule = createModule({
  id: 'playlist-module',
  typeDefs: [
    gql`
      type Playlist {
        collaborative: Boolean
        description: String
        href: String
        id: String
        name: String
        public: Boolean
        snapshot_id: String
        type: String
        uri: String
        images: [Image]
        external_urls: ExternalUrls
      }`
  ],
  resolvers: {
    Query: {}
  }
})

// I don't undestand this types
/**
  tracks: Tracks
  owner: Owner
  followers: Followers */
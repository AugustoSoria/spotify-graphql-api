export const Artist = `
  type Artist {
    external_urls: ExternalUrls
    followers: Followers
    genres: [String]
    href: String
    id: ID
    images: [Image]
    name: String
    popularity: Int
    type: String
    uri: String
  }
`
export const Followers = `
  type Followers {
    href: String
    total: Int
  }
`
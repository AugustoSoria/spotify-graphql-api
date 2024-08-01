export const Album = `
  type Album {
    album_type: String
    total_tracks: Int
    available_markets: [String]
    external_urls: ExternalUrls
    href: String
    id: String
    images: [Image]
    name: String
    release_date: String
    release_date_precision: String
    restrictions: Restrictions
    type: String
    uri: String
    artists: [Artist]
    copyrights: [Copyright]
    external_ids: ExternalIds
    genres: [String]
    label: String
    popularity: Int
  }
`
export const Image = `
  type Image {
    url: String
    height: Int
    width: Int
  }
`

export const Copyright = `
  type Copyright {
    text: String
    type: String
  }
`
export const Categories = `
  type Categories {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [Items]
  }
`

export const Items = `
  type Items {
    href: String
    id: String
    name: String
    icons: [Icons]
  }
`

export const Icons = `
  type Icons {
    url: String
    height: Int
    width: Int
  }
`
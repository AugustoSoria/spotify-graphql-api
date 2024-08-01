import { gql } from "apollo-server";
import { Album, Copyright, Image } from "./types/Album.js";
import { Artist, Followers } from "./types/Artist.js";
import { Track, ExternalIds, ExternalUrls, Restrictions } from "./types/Track.js";
import { Categories, Icons, Items } from "./types/Category.js";

const typeDefs = gql`
  ${Album}
  ${Copyright}
  ${Image}
  ${Artist}
  ${Followers}
  ${Track}
  ${ExternalIds}
  ${ExternalUrls}
  ${Restrictions}
  ${Categories}
  ${Items}
  ${Icons}

  type Query {
    getCategories(offset: Int, limit: Int): Categories
    getArtist(id: ID): Artist
  }
`;

export default typeDefs;
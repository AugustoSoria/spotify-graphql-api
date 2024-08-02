import { createApplication } from 'graphql-modules'
import { albumModule } from './types/music/Album.js'
import { artistModule } from './types/music/Artist.js'
import { categoryModule } from './types/music/Category.js'
import { categoriesModule } from './types/Categories.js'
import { copyrightModule } from './types/metadata/Copyright.js'
import { externalIdsModule } from './types/metadata/ExternalIds.js'
import { externalUrlsModule } from './types/metadata/ExternalUrls.js'
import { followersModule } from './types/metadata/Followers.js'
import { iconsModule } from './types/metadata/Icons.js'
import { imageModule } from './types/metadata/Image.js'
import { itemsModule } from './types/common/Items.js'
import { restrictionsModule } from './types/metadata/Restrictions.js'
import { trackModule } from './types/music/Track.js'
import { playlistModule } from './types/music/Playlist.js'
import { playlistsModule } from './types/Playlists.js'
import { paginatedResponseModule } from './types/common/PaginatedResponse.js'
import { paginatedItemsModule } from './types/common/PaginatedItems.js'
import { ownerModule } from './types/Owner.js'
import { addedByModule } from './types/AddedBy.js'
import { trackWrapperModule } from './types/TrackWrapper.js'
import { videoThumbnailModule } from './types/metadata/VideoThumbnail.js'
 
// This is the application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
  modules: [
    albumModule, artistModule, categoryModule, copyrightModule, externalIdsModule, 
    externalUrlsModule, followersModule, iconsModule, imageModule, itemsModule, restrictionsModule,
    trackModule, playlistModule, playlistsModule, categoriesModule, paginatedResponseModule, 
    paginatedItemsModule, ownerModule, addedByModule, trackWrapperModule, videoThumbnailModule
  ]
})
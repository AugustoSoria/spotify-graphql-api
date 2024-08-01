import { createApplication } from 'graphql-modules'
import { albumModule } from './types/Album.js'
import { artistModule } from './types/Artist.js'
import { categoryModule } from './types/Category.js'
import { copyrightModule } from './types/Copyright.js'
import { externalIdsModule } from './types/ExternalIds.js'
import { externalUrlsModule } from './types/ExternalUrls.js'
import { followersModule } from './types/Followers.js'
import { iconsModule } from './types/Icons.js'
import { imageModule } from './types/Image.js'
import { itemsModule } from './types/Items.js'
import { restrictionsModule } from './types/Restrictions.js'
import { trackModule } from './types/Track.js'
 
// This is the application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
  modules: [albumModule, artistModule, categoryModule, copyrightModule, externalIdsModule, 
            externalUrlsModule, followersModule, iconsModule, imageModule, itemsModule, 
            restrictionsModule, trackModule]
})
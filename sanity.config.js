// sanity.config.js
import { defineConfig, isDev } from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {media} from 'sanity-plugin-media'

import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',
  projectId: 'mh1to92v',
  dataset: 'production',
  plugins: [
    deskTool(),
    media(),
    ...(isDev ? [visionTool()] : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
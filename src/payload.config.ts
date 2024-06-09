import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Posts from './collections/Posts'
import Categories from './collections/Categories'
import Media from './collections/Media'
import Authors from './collections/Authors'
import ContactForm from './collections/ContactForm'
import Newsletter from './collections/Newsletter'

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler()
	},
	editor: slateEditor({}),
	collections: [Users, Posts, Categories, Media, Authors, ContactForm, Newsletter],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts')
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
	},
	plugins: [payloadCloud()],
	upload: {
		limits: {
			fileSize: 5000000 // 5MB, written in bytes
		}
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI
		}
	})
})

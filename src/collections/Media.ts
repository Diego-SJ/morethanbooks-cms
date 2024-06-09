import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
	slug: 'media',
	auth: false,
	access: {
		read: () => true
	},
	upload: {
		staticURL: '/media',
		staticDir: 'media',
		mimeTypes: ['image/*']
	},
	fields: [
		{
			name: 'alt',
			type: 'text'
		}
	]
}

export default Media

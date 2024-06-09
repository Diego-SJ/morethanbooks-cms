import { CollectionConfig } from 'payload/types'

const Newsletter: CollectionConfig = {
	slug: 'newsletter',
	auth: false,
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: 'name'
	},
	fields: [
		{
			name: 'email',
			label: 'Correo Electrónico',
			type: 'email',
			required: true
		}
	]
}

export default Newsletter

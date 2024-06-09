import { CollectionConfig } from 'payload/types'

const Authors: CollectionConfig = {
	slug: 'authors',
	auth: false,
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: 'name'
	},
	fields: [
		{
			name: 'avatar',
			label: 'Foto de Perfil',
			type: 'upload',
			relationTo: 'media'
		},
		{
			name: 'name',
			label: 'Nombre',
			type: 'text',
			required: true
		},
		{
			name: 'email',
			label: 'Correo Electrónico',
			type: 'email',
			required: false
		}
	]
}

export default Authors

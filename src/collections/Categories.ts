import { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
	slug: 'categories',
	auth: false,
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: 'name'
	},
	fields: [
		{
			name: 'name',
			label: 'Nombre',
			type: 'text',
			required: true
		},
		{
			name: 'description',
			label: 'Descripcion',
			type: 'textarea',
			required: true
		},
		{
			name: 'posts',
			label: 'Publicaciones',
			type: 'relationship',
			relationTo: 'posts',
			hasMany: true
		},
		{
			name: 'category_type', // required
			type: 'select', // required
			label: 'Tipo de categoría', // required
			hasMany: true,
			admin: {
				isClearable: true,
				isSortable: true // use mouse to drag and drop different values, and sort them according to your choice
			},
			options: [
				{
					label: 'Blog',
					value: 'blog'
				},
				{
					label: 'Evento',
					value: 'event'
				}
			]
		}
	]
}

export default Categories

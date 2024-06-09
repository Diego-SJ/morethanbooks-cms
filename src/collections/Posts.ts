import { CollectionConfig } from 'payload/types'
import { SlugField } from '@nouance/payload-better-fields-plugin'

const Posts: CollectionConfig = {
	slug: 'posts',
	auth: false,
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: 'name'
	},
	fields: [
		{
			name: 'heroImage',
			label: 'Imagen de portada',
			type: 'upload',
			relationTo: 'media',
			required: true
		},
		{
			name: 'title',
			label: 'Titulo',
			type: 'text',
			required: true
		},
		{
			name: 'description',
			label: 'Descripcion',
			type: 'textarea',
			required: true,
			maxLength: 100
		},
		// {
		// 	name: 'author',
		// 	label: 'Autor',
		// 	type: 'relationship',
		// 	relationTo: 'writer',
		// 	required: true
		// },
		{
			name: 'publishedAt',
			label: 'Publicado en',
			type: 'date',
			required: true
		},

		{
			name: 'categories',
			label: 'Categorias',
			type: 'relationship',
			relationTo: 'categories',
			hasMany: true,
			required: true
		},
		...SlugField(
			{
				name: 'slug',
				admin: {
					position: 'sidebar'
				}
			},
			{
				useFields: ['title']
			}
		),
		{
			name: 'content',
			label: 'Contenido',
			type: 'richText',
			required: true
		}
	]
}

export default Posts

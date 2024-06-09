import { CollectionConfig } from 'payload/types'

const ContactForm: CollectionConfig = {
	slug: 'contact_form',

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
			name: 'email',
			label: 'Correo Electrónico',
			type: 'email',
			required: true
		},
		{
			name: 'message',
			label: 'Mensaje',
			type: 'textarea',
			required: true
		}
	]
}

export default ContactForm

export function createSlug(text: string): string {
	return text
		.toLowerCase() // Convertir a minúsculas
		.trim() // Eliminar espacios al principio y al final
		.replace(/[^\w\s-]/g, '') // Eliminar caracteres no alfanuméricos (excepto guiones y espacios)
		.replace(/\s+/g, '-') // Reemplazar espacios por guiones
		.replace(/-+/g, '-') // Reemplazar múltiples guiones por uno solo
}

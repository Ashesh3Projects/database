type Schema = import('@nozbe/watermelondb/Schema').TableSchemaSpec;

const schema: Schema = {
	name: 'uis',
	columns: [
		{ name: 'section', type: 'string' },
		{ name: 'sortBy', type: 'string' },
		{ name: 'sortDirection', type: 'string' },
		{ name: 'display', type: 'string' },
	],
};

export default schema;

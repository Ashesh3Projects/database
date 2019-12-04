type Schema = import('@nozbe/watermelondb/Schema').TableSchemaSpec;

const schema: Schema = {
	name: 'customers',
	columns: [
		{ name: 'remote_id', type: 'number', isIndexed: true },
		{ name: 'date_created', type: 'string' },
		{ name: 'date_created_gmt', type: 'string' },
		{ name: 'date_modified', type: 'string' },
		{ name: 'date_modified_gmt', type: 'string' },
		{ name: 'email', type: 'string' },
		{ name: 'first_name', type: 'string' },
		{ name: 'last_name', type: 'string' },
		{ name: 'role', type: 'string' },
		{ name: 'username', type: 'string' },
		{ name: 'password', type: 'string' },
		{ name: 'is_paying_customer', type: 'boolean' },
		{ name: 'avatar_url', type: 'string' },
		{ name: 'billing_id', type: 'string' },
		{ name: 'shipping_id', type: 'string' },
	],
};

export default schema;

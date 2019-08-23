type Schema = import('@nozbe/watermelondb/Schema').TableSchemaSpec;

const schema: Schema = {
	name: 'products',
	columns: [
		{ name: 'remote_id', type: 'number', isIndexed: true },
		{ name: 'name', type: 'string' },
		{ name: 'slug', type: 'string' },
		{ name: 'permalink', type: 'string' },
		{ name: 'date_created', type: 'string' },
		{ name: 'date_created_gmt', type: 'string' },
		{ name: 'date_modified', type: 'string' },
		{ name: 'date_modified_gmt', type: 'string' },
		{ name: 'type', type: 'string' },
		{ name: 'status', type: 'string' },
		{ name: 'featured', type: 'boolean' },
		{ name: 'catalog_visibility', type: 'string' },
		{ name: 'description', type: 'string' },
		{ name: 'short_description', type: 'string' },
		{ name: 'sku', type: 'string' },
		{ name: 'price', type: 'string' },
		{ name: 'regular_price', type: 'string' },
		{ name: 'sale_price', type: 'string' },
		{ name: 'date_on_sale_from', type: 'string', isOptional: true },
		{ name: 'date_on_sale_from_gmt', type: 'string', isOptional: true },
		{ name: 'date_on_sale_to', type: 'string', isOptional: true },
		{ name: 'date_on_sale_to_gmt', type: 'string', isOptional: true },
		{ name: 'price_html', type: 'string' },
		{ name: 'on_sale', type: 'boolean' },
		{ name: 'purchasable', type: 'boolean' },
		{ name: 'total_sales', type: 'number' },
		{ name: 'virtual', type: 'boolean' },
		{ name: 'downloadable', type: 'boolean' },
		{ name: 'downloads', type: 'string' },
		{ name: 'download_limit', type: 'number' },
		{ name: 'download_expiry', type: 'number' },
		{ name: 'external_url', type: 'string' },
		{ name: 'button_text', type: 'string' },
		{ name: 'tax_status', type: 'string' },
		{ name: 'tax_class', type: 'string' },
		{ name: 'manage_stock', type: 'boolean' },
		{ name: 'stock_quantity', type: 'string', isOptional: true },
		{ name: 'stock_status', type: 'string' },
		{ name: 'backorders', type: 'string' },
		{ name: 'backorders_allowed', type: 'boolean' },
		{ name: 'backordered', type: 'boolean' },
		{ name: 'sold_individually', type: 'boolean' },
		{ name: 'weight', type: 'string' },
		{ name: 'dimensions', type: 'string' },
		{ name: 'shipping_required', type: 'boolean' },
		{ name: 'shipping_taxable', type: 'boolean' },
		{ name: 'shipping_class', type: 'string' },
		{ name: 'shipping_class_id', type: 'number' },
		{ name: 'reviews_allowed', type: 'boolean' },
		{ name: 'average_rating', type: 'string' },
		{ name: 'rating_count', type: 'number' },
		{ name: 'related_ids', type: 'string' },
		{ name: 'upsell_ids', type: 'string' },
		{ name: 'cross_sell_ids', type: 'string' },
		{ name: 'parent_id', type: 'number' },
		{ name: 'purchase_note', type: 'string' },
		{ name: 'categories', type: 'string' },
		{ name: 'tags', type: 'string' },
		{ name: 'images', type: 'string' },
		{ name: 'attributes', type: 'string' },
		{ name: 'default_attributes', type: 'string' },
		{ name: 'variations', type: 'string' },
		{ name: 'grouped_products', type: 'string' },
		{ name: 'menu_order', type: 'number' },
		{ name: 'meta_data', type: 'string' },
		{ name: 'thumbnail', type: 'string' },
		{ name: 'barcode', type: 'string' },
	],
};

export default schema;

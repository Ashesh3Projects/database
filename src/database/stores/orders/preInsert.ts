import difference from 'lodash/difference';
import unset from 'lodash/unset';

// @TODO - turn this into a plugin?
export default (rawData: {}): void => {
	// remove _links property (invalid property name)
	unset(rawData, '_links');

	// change id to string
	rawData.id = String(rawData.id);

	// remove propeties not on schema
	const omitProperties = difference(Object.keys(rawData), this.schema.topLevelFields);
	if (omitProperties.length > 0) {
		console.log('the following properties are being omitted', omitProperties);
		omitProperties.forEach((prop) => {
			unset(rawData, prop);
		});
	}

	// bulkInsert line items
	this.collections().line_items.bulkInsertFromOrder(rawData.line_items, rawData.id);
	this.collections().fee_lines.bulkInsertFromOrder(rawData.fee_lines, rawData.id);

	// extract line_item ids
	rawData.line_items = rawData.line_items.map((line_item) => String(line_item.id));
	rawData.fee_lines = rawData.fee_lines.map((fee_line) => String(fee_line.id));
};

import { Q } from '@nozbe/watermelondb';
import { field, nochange, lazy, json } from '@nozbe/watermelondb/decorators';
import Model from './base';

const sanitizeOptions = rawOptions => {
	return Array.isArray(rawOptions) ? rawOptions.map(String) : [];
};

export default class Attribute extends Model {
	static table = 'attributes';

	static associations = {
		product_attributes: { type: 'has_many', foreignKey: 'attribute_id' },
	};

	@lazy
	products = this.collections
		.get('products')
		.query(Q.on('product_attributes', 'attribute_id', this.id));

	@nochange @field('remote_id') remote_id!: number;
	@field('name') name!: string;
	@field('position') position!: number;
	@field('visible') visible!: boolean;
	@field('variation') variation!: boolean;
	@json('options', sanitizeOptions) options!: string;

	/**
	 * Note! Attribute can have remote ID = 0
	 * @param json
	 */
	rawUpdateFromJSON(json) {
		Object.keys(json).forEach((key: string) => {
			if (key === 'id' && !this.remote_id) {
				if (this.remote_id !== 0) {
					this.remote_id = json.id;
				}
			} else {
				this[key] = json[key];
			}
		});
	}
}

import { ObservableResource } from 'observable-hooks';
import { from, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import difference from 'lodash/difference';
import unset from 'lodash/unset';
import sum from 'lodash/sum';
import schema from './schema.json';

type StoreDatabase = import('../../../types').StoreDatabase;
type OrderFeeLineDocument = import('../../../types').OrderFeeLineDocument;

/**
 * WooCommerce Order Fee Line methods
 */
export const methods = {};

/**
 * WooCommerce Order Fee Line statics
 */
export const statics = {
	/**
	 *
	 */
	async bulkInsertFromOrder(
		this: OrderFeeLineDocument,
		data: Record<string, unknown>[],
		orderId: string
	) {
		this.bulkInsert(
			data.map((d) => {
				d.order_id = orderId;
				return d;
			})
		);
	},
};

/**
 *
 * @param db
 */
const createFeeLinesCollection = async (db: StoreDatabase) => {
	const collections = await db.addCollections({
		fee_lines: {
			schema,
			// pouchSettings: {},
			statics,
			methods,
			// attachments: {},
			// options: {},
			// migrationStrategies: {},
			// autoMigrate: true,
			// cacheReplacementPolicy() {},
		},
	});

	// @TODO - turn this into a plugin?
	collections.fee_lines.preInsert(function (rawData: Record<string, unknown>) {
		// remove _links property (invalid property name)
		// unset(rawData, '_links');

		// remove propeties not on schema
		// const omitProperties = difference(Object.keys(rawData), this.schema.topLevelFields);
		// if (omitProperties.length > 0) {
		// 	console.log('the following properties are being omiited', omitProperties);
		// 	omitProperties.forEach((prop) => {
		// 		unset(rawData, prop);
		// 	});
		// }

		// change id to string
		rawData.id = String(rawData.id);
	}, false);

	// FeeLinesCollection.postCreate((raw, model) => {
	// combineLatest(model.quantity$, model.price$).subscribe((val) => {
	// 	model.atomicSet('total', String(val[0] * val[1]));
	// });
	// });

	return collections.fee_lines;
};

export default createFeeLinesCollection;

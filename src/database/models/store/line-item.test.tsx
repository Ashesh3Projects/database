// import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { Database } from '@nozbe/watermelondb';
import { appSchema, tableSchema } from '@nozbe/watermelondb';
import LineItem, { lineItemSchema } from './line-item';

const mockSchema = appSchema({
	version: 1,
	tables: [tableSchema(lineItemSchema)],
});

// const adapter = new LokiJSAdapter({
//   dbName: 'tests',
//   mockSchema,
// });

const makeDatabase = ({ actionsEnabled = false } = {}) =>
	new Database({
		// @ts-ignore
		adapter: { mockSchema },
		// @ts-ignore
		modelClasses: [LineItem],
		actionsEnabled,
	});

describe('Order Line Item Model', () => {
	it('can instantiate new records', async () => {
		const database = makeDatabase();
		const collection = database.collections.get('tests');
		// const m1 = await collection.create((record: any) => {
		//   record.name = 'Original name';
		// });
		const m1 = await collection.create();
		expect(m1.name).toBe('Original name');
	});
});

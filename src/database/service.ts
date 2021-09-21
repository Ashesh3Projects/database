import {
	createRxDatabase,
	addRxPlugin,
	isRxDatabase,
	randomCouchString,
	// PouchDB,
} from 'rxdb/plugins/core';
import { checkAdapter, addPouchPlugin, getRxStoragePouch } from 'rxdb/plugins/pouchdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
import { RxDBLocalDocumentsPlugin } from 'rxdb/plugins/local-documents';
// import { RxDBNoValidatePlugin } from 'rxdb/plugins/no-validate';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import forEach from 'lodash/forEach';
import isFunction from 'lodash/isFunction';
import camelCase from 'lodash/camelCase';
import set from 'lodash/set';
import get from 'lodash/get';
import unset from 'lodash/unset';
import Platform from '@wcpos/common/src/lib/platform';
import axios from 'axios';
import difference from 'lodash/difference';
import collectionsHelper from './plugins/utils/collections';
import removeChildren from './plugins/remove-children';
import { RxDBGenerateIdPlugin } from './plugins/utils/generate-id';
import RxDBWooCommerceRestApiSyncPlugin from './plugins/woocommerce-rest-api';
import { userCollections, storeCollections } from './collections';
// import { config } from './adapter';

addPouchPlugin(require('pouchdb-adapter-idb'));

if (process.env.NODE_ENV === 'development') {
	// in dev-mode we add the dev-mode plugin
	// which does many checks and adds full error messages
	// also, only add on first render, seems to be conflict with HMR
	if (!module?.hot?.data) {
		addRxPlugin(RxDBDevModePlugin);
	}

	// add debugging
	// @ts-ignore
	// import('pouchdb-debug').then((pouchdbDebug) => {
	// 	PouchDB.plugin(pouchdbDebug.default);
	// 	PouchDB.debug.enable('*');
	// });
}

// @ts-ignore
addRxPlugin(collectionsHelper);
// @ts-ignore
addRxPlugin(removeChildren);
addRxPlugin(RxDBGenerateIdPlugin);
addRxPlugin(RxDBLocalDocumentsPlugin);
// addRxPlugin(RxDBNoValidatePlugin);
addRxPlugin(RxDBValidatePlugin);
addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBLeaderElectionPlugin);
addRxPlugin(RxDBWooCommerceRestApiSyncPlugin);

/**
 * creates the generic database
 */
export async function _createDB<T>(name: string) {
	const db = await createRxDatabase<T>({
		name,
		ignoreDuplicate: process.env.NODE_ENV === 'development',
		// ...config,
		// pouchSettings: { revs_limit: 1, auto_compaction: true },
		storage: getRxStoragePouch('idb', { revs_limit: 1, auto_compaction: true }),
	});

	// add to window for debugging
	if (Platform.OS === 'web') {
		if (!(window as any).dbs) {
			set(window, 'dbs', {});
		}
		(window as any).dbs[name] = db;
	}

	return db;
}

/**
 * types for the Users database
 */
export type UserDatabaseCollections = {
	logs: import('./collections/logs').LogCollection;
	users: import('./collections/users').UserCollection;
	sites: import('./collections/sites').SiteCollection;
	wp_credentials: import('./collections/wp-credentials').WPCredentialsCollection;
	stores: import('./collections/sites').SiteCollection;
};
export type UserDatabase = import('rxdb').RxDatabase<UserDatabaseCollections>;

/**
 * creates the Users database
 */
export async function _createUsersDB() {
	const db = await _createDB<UserDatabaseCollections>('wcposusers');
	// @ts-ignore
	const collections = await db.addCollections(userCollections);

	return db;
}

/**
 * types for the Store database
 */
export type StoreDatabaseCollections = {
	products: import('./collections/products').ProductCollection;
	orders: import('./collections/orders').OrderCollection;
	line_items: import('./collections/line-items').LineItemCollection;
	fee_lines: import('./collections/fee-lines').FeeLineCollection;
	shipping_lines: import('./collections/shipping-lines').ShippingLineCollection;
	customers: import('./collections/customers').CustomerCollection;
	taxes: import('./collections/taxes').TaxRateCollection;
};
export type StoreDatabase = import('rxdb').RxDatabase<StoreDatabaseCollections>;

/**
 * creates the Store database
 */
export async function _createStoresDB(name: string) {
	const db = await _createDB<StoreDatabaseCollections>(name);
	// const httpClient = axios.create({
	// 	baseURL,
	// 	headers: { 'X-WCPOS': '1', Authorization: `Bearer ${jwt}` },
	// });
	// Object.assign(db, { httpClient });

	// @ts-ignore
	const collections = await db.addCollections(storeCollections);

	/**
	 * Attach hooks for each collection
	 */
	// forEach(collections, (collection) => {
	// 	forEach(collection.options.hooks, (hook, key) => {
	// 		const { handle, parallel } = hook;
	// 		collection[key](handle, parallel);
	// 	});

	// 	collection.preInsert((plainData: Record<string, unknown>) => {
	// 		const promises: Promise<any>[] = [];
	// 		parsePlainData(plainData, collection);

	// 		/**
	// 		 * This allows each collection to manage plainData coming from the WC REST API
	// 		 * It loops through each property and calls collection.preInsert{Property}
	// 		 * if it exists
	// 		 */
	// 		forEach(plainData, (data, key) => {
	// 			const preInsertKey = camelCase(`preInsert-${key}`);
	// 			if (isFunction(collection[preInsertKey])) {
	// 				promises.push(collection[preInsertKey](plainData, collection, db));
	// 			}
	// 		});

	// 		return Promise.all(promises).then(() => plainData);
	// 	}, false);

	// 	collection.preSave((plainData: Record<string, unknown>, rxDocument) => {
	// 		parsePlainData(plainData, collection);
	// 	}, false);
	// });

	return db;
}

/**
 * Database Service Interface
 */
export interface IDatabaseService {
	USER_DB_CREATE_PROMISE: Promise<UserDatabase>;
	STORE_DB_CREATE_PROMISE: Promise<StoreDatabase | undefined>;
	getUserDB: () => Promise<UserDatabase>;
	getStoreDB: (name: string) => Promise<StoreDatabase | undefined>;
}

/**
 * Database Service
 */
const DatabaseService: IDatabaseService = {
	USER_DB_CREATE_PROMISE: _createUsersDB(),
	STORE_DB_CREATE_PROMISE: Promise.resolve(undefined),

	async getUserDB() {
		return this.USER_DB_CREATE_PROMISE;
	},

	async getStoreDB(name) {
		const db = await this.STORE_DB_CREATE_PROMISE;
		if (!db) {
			this.STORE_DB_CREATE_PROMISE = _createStoresDB(name);
		} else if (db?.name !== name) {
			await db?.destroy();
			this.STORE_DB_CREATE_PROMISE = _createStoresDB(name);
		}
		return this.STORE_DB_CREATE_PROMISE;
	},
};

export { checkAdapter, DatabaseService, isRxDatabase };

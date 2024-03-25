import { addRxPlugin } from 'rxdb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBJsonDumpPlugin } from 'rxdb/plugins/json-dump';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
import { RxDBLocalDocumentsPlugin } from 'rxdb/plugins/local-documents';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration-schema';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';

import { findOneFixPlugin } from './find-one-fix';
import { RxDBGenerateIdPlugin } from './generate-id';
import parseRestResponsePlugin from './parse-rest-response';
import populatePlugin from './populate';
import { resetCollectionPlugin } from './reset-collection';
// import { searchPlugin } from './search';

if (process.env.NODE_ENV === 'development') {
	// in dev-mode we add the dev-mode plugin
	// which does many checks and adds full error messages
	// also, only add on first render, seems to be conflict with HMR
	// if (!module?.hot?.data) {
	// 	addRxPlugin(RxDBDevModePlugin);
	// }
	addRxPlugin(RxDBDevModePlugin);

	// add debugging
	// @ts-ignore
	// import('pouchdb-debug').then((pouchdbDebug) => {
	// 	PouchDB.plugin(pouchdbDebug.default);
	// 	PouchDB.debug.enable('*');
	// });
}

// default plugins
addRxPlugin(RxDBLocalDocumentsPlugin);
// addRxPlugin(RxDBQueryBuilderPlugin);
addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBLeaderElectionPlugin);
addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBJsonDumpPlugin);
addRxPlugin(RxDBAttachmentsPlugin);

// custom plugins
addRxPlugin(RxDBGenerateIdPlugin); // should run before populate and parseRestResponse
addRxPlugin(populatePlugin);
addRxPlugin(findOneFixPlugin);
addRxPlugin(parseRestResponsePlugin);
addRxPlugin(resetCollectionPlugin);
// addRxPlugin(searchPlugin);

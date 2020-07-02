import createLogsCollection from './logs';
import createAppUserCollection from './app-users';
import createSitesCollection from './sites';
import createWpUserCollection from './wp-users';

export default [
	createLogsCollection,
	createAppUserCollection,
	createSitesCollection,
	createWpUserCollection,
];

import axios from 'axios';
// import { encode as btoa } from 'base-64';

export const noConfigAxios = axios;

/**
 * Create axios instance with default config
 */
const http = axios.create({
	baseURL: 'https://wcposdev.wpengine.com/wp-json/wc/v3/',
	// timeout: 1000,
	// headers: { 'X-WCPOS': '1' },
});

http.interceptors.request.use(
	function (config) {
		if (config.method !== 'head') {
			config.headers['X-WCPOS'] = 1;
		}
		if (config.auth) {
			config.headers.Authorization = `Basic ${btoa(
				`${config.auth.username}:${config.auth.password}`
			)}`;
			config.auth = undefined;
		}
		return config;
	},
	function (error) {
		debugger;
		return Promise.reject(error);
	}
);

Object.assign(http, { CancelToken: axios.CancelToken, isCancel: axios.isCancel });
// http.CancelToken = axios.CancelToken;
// http.isCancel = axios.isCancel;

export default http;

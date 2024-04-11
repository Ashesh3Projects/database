export const storesLiteral = {
	title: 'WCPOS Store schema',
	version: 0,
	description: 'WooCommerce POS Store',
	type: 'object',
	primaryKey: 'localID',
	properties: {
		localID: {
			description: 'Unique local identifier for the resource. Not a UUID.',
			type: 'string',
			maxLength: 8,
		},
		id: {
			type: 'number',
		},
		name: {
			type: 'string',
		},
		store_address: {
			title: 'Address line 1',
			description: 'The street address for your business location.',
			type: 'string',
		},
		store_address_2: {
			title: 'Address line 2',
			description: 'An additional, optional address line for your business location.',
			type: 'string',
		},
		store_city: {
			title: 'City',
			description: 'The city in which your business is located.',
			type: 'string',
		},
		default_country: {
			title: 'Country / State',
			description: 'The country and state or province, if any, in which your business is located.',
			type: 'string',
			default: 'US:CA',
		},
		store_postcode: {
			title: 'Postcode / ZIP',
			description: 'The postal code, if any, in which your business is located.',
			type: 'string',
		},
		default_customer: {
			title: 'Default POS customer',
			type: 'integer',
			default: 0,
		},
		default_customer_is_cashier: {
			title: 'Default POS customer is cashier',
			type: 'boolean',
			default: false,
		},
		default_customer_address: {
			title: 'Default customer location',
			type: 'string',
			default: 'base',
			enum: ['', 'base', 'geolocation', 'geolocation_ajax'],
			enumNames: [
				'No location by default',
				'Shop country/region',
				'Geolocate',
				'Geolocate (with page caching support)',
			],
		},
		calc_taxes: {
			title: 'Enable taxes',
			description: 'Enable tax rates and calculations',
			type: 'string',
			default: 'no',
			enum: ['yes', 'no'],
			enumNames: ['Yes', 'No'],
		},
		enable_coupons: {
			title: 'Enable coupons',
			description: 'Enable the use of coupon codes',
			type: 'string',
			default: 'yes',
			enum: ['yes', 'no'],
			enumNames: ['Yes', 'No'],
		},
		calc_discounts_sequentially: {
			description: 'Calculate coupon discounts sequentially',
			type: 'string',
			default: 'no',
			enum: ['yes', 'no'],
			enumNames: ['Yes', 'No'],
		},
		currency: {
			title: 'Currency',
			description:
				'This controls what currency prices are listed at in the catalog and which currency gateways will take payments in.',
			type: 'string',
			default: 'USD',
			enum: [
				'AED',
				'AFN',
				'ALL',
				'AMD',
				'ANG',
				'AOA',
				'ARS',
				'AUD',
				'AWG',
				'AZN',
				'BAM',
				'BBD',
				'BDT',
				'BGN',
				'BHD',
				'BIF',
				'BMD',
				'BND',
				'BOB',
				'BRL',
				'BSD',
				'BTC',
				'BTN',
				'BWP',
				'BYR',
				'BYN',
				'BZD',
				'CAD',
				'CDF',
				'CHF',
				'CLP',
				'CNY',
				'COP',
				'CRC',
				'CUC',
				'CUP',
				'CVE',
				'CZK',
				'DJF',
				'DKK',
				'DOP',
				'DZD',
				'EGP',
				'ERN',
				'ETB',
				'EUR',
				'FJD',
				'FKP',
				'GBP',
				'GEL',
				'GGP',
				'GHS',
				'GIP',
				'GMD',
				'GNF',
				'GTQ',
				'GYD',
				'HKD',
				'HNL',
				'HRK',
				'HTG',
				'HUF',
				'IDR',
				'ILS',
				'IMP',
				'INR',
				'IQD',
				'IRR',
				'IRT',
				'ISK',
				'JEP',
				'JMD',
				'JOD',
				'JPY',
				'KES',
				'KGS',
				'KHR',
				'KMF',
				'KPW',
				'KRW',
				'KWD',
				'KYD',
				'KZT',
				'LAK',
				'LBP',
				'LKR',
				'LRD',
				'LSL',
				'LYD',
				'MAD',
				'MDL',
				'MGA',
				'MKD',
				'MMK',
				'MNT',
				'MOP',
				'MRU',
				'MUR',
				'MVR',
				'MWK',
				'MXN',
				'MYR',
				'MZN',
				'NAD',
				'NGN',
				'NIO',
				'NOK',
				'NPR',
				'NZD',
				'OMR',
				'PAB',
				'PEN',
				'PGK',
				'PHP',
				'PKR',
				'PLN',
				'PRB',
				'PYG',
				'QAR',
				'RON',
				'RSD',
				'RUB',
				'RWF',
				'SAR',
				'SBD',
				'SCR',
				'SDG',
				'SEK',
				'SGD',
				'SHP',
				'SLL',
				'SOS',
				'SRD',
				'SSP',
				'STN',
				'SYP',
				'SZL',
				'THB',
				'TJS',
				'TMT',
				'TND',
				'TOP',
				'TRY',
				'TTD',
				'TWD',
				'TZS',
				'UAH',
				'UGX',
				'USD',
				'UYU',
				'UZS',
				'VEF',
				'VES',
				'VND',
				'VUV',
				'WST',
				'XAF',
				'XCD',
				'XOF',
				'XPF',
				'YER',
				'ZAR',
				'ZMW',
			],
		},
		currency_pos: {
			title: 'Currency Position',
			description: 'This controls the position of the currency symbol.',
			type: 'string',
			default: 'left',
			enum: ['left', 'right', 'left_space', 'right_space'],
			enumNames: ['Left', 'Right', 'Left with space', 'Right with space'],
		},
		price_thousand_sep: {
			title: 'Thousand Separator',
			description: 'This sets the thousand separator of displayed prices.',
			type: 'string',
			default: ',',
		},
		price_decimal_sep: {
			title: 'Decimal Separator',
			description: 'This sets the decimal separator of displayed prices.',
			type: 'string',
			default: '.',
		},
		price_num_decimals: {
			title: 'Number of Decimals',
			description: 'This sets the number of decimals of displayed prices.',
			type: 'number',
			default: 2,
		},
		prices_include_tax: {
			title: 'Prices entered with tax',
			default: 'no',
			type: 'string',
			enum: ['yes', 'no'],
			enumNames: ['Yes', 'No'],
		},
		tax_based_on: {
			title: 'Calculate tax based on',
			default: 'base',
			type: 'string',
			enum: ['shipping', 'billing', 'base'],
			enumNames: ['Customer shipping address', 'Customer billing address', 'Shop base address'],
		},
		shipping_tax_class: {
			title: 'Shipping tax class',
			description:
				'Optionally control which tax class shipping gets, or leave it so shipping tax is based on the cart items themselves.',
			type: 'string',
			default: 'inherit',
			enum: ['inherit', '', 'reduced-rate', 'zero-rate'],
			enumNames: [
				'Shipping tax class based on cart items',
				'Standard',
				'Reduced rate',
				'Zero rate',
			],
		},
		tax_round_at_subtotal: {
			title: 'Rounding',
			description: 'Round tax at subtotal level, instead of rounding per line',
			default: 'no',
			type: 'string',
			enum: ['yes', 'no'],
			enumNames: ['Yes', 'No'],
		},
		tax_display_shop: {
			title: 'Display prices in the shop',
			type: 'string',
			default: 'excl',
			enum: ['incl', 'excl'],
			enumNames: ['Including tax', 'Excluding tax'],
		},
		tax_display_cart: {
			title: 'Display prices during cart and checkout',
			type: 'string',
			default: 'excl',
			enum: ['incl', 'excl'],
			enumNames: ['Including tax', 'Excluding tax'],
		},
		price_display_suffix: {
			title: 'Price display suffix',
			type: 'string',
			default: '',
		},
		tax_total_display: {
			title: 'Display tax totals',
			type: 'string',
			default: 'itemized',
			enum: ['single', 'itemized'],
			enumNames: ['As a single total', 'Itemized'],
		},
		locale: {
			title: 'Language',
			type: 'string',
			enum: [
				'af',
				'ak',
				'sq',
				'arq',
				'am',
				'ar',
				'hy',
				'frp',
				'as',
				'ast',
				'az',
				'ba',
				'eu',
				'bel',
				'bn_BD',
				'bn_IN',
				'bho',
				'brx',
				'gax',
				'bs_BA',
				'bre',
				'bg_BG',
				'ca',
				'ceb',
				'zh_CN',
				'zh_HK',
				'zh_SG',
				'zh_TW',
				'cor',
				'co',
				'hr',
				'cs_CZ',
				'da_DK',
				'dv',
				'nl_NL',
				'nl_BE',
				'dzo',
				'en_US',
				'en_AU',
				'en_CA',
				'en_NZ',
				'en_ZA',
				'en_GB',
				'eo',
				'et',
				'ewe',
				'fo',
				'fi',
				'fon',
				'fr_BE',
				'fr_CA',
				'fr_FR',
				'fy',
				'fur',
				'fuc',
				'gl_ES',
				'ka_GE',
				'de_DE',
				'de_AT',
				'de_CH',
				'el',
				'kal',
				'gu',
				'hat',
				'hau',
				'haw_US',
				'he_IL',
				'hi_IN',
				'hu_HU',
				'is_IS',
				'ido',
				'ibo',
				'id_ID',
				'ga',
				'it_IT',
				'ja',
				'jv_ID',
				'kab',
				'kn',
				'kaa',
				'kk',
				'km',
				'kin',
				'ky_KY',
				'ko_KR',
				'kmr',
				'ckb',
				'kir',
				'lo',
				'la',
				'lv',
				'lij',
				'li',
				'lin',
				'lt_LT',
				'lmo',
				'dsb',
				'lug',
				'lb_LU',
				'mk_MK',
				'mai',
				'mg_MG',
				'ms_MY',
				'ml_IN',
				'mlt',
				'mri',
				'mr',
				'mfe',
				'mn',
				'me_ME',
				'ary',
				'my_MM',
				'ne_NP',
				'pcm',
				'nb_NO',
				'nn_NO',
				'nqo',
				'oci',
				'os',
				'pa_IN',
				'pap_AW',
				'pap_CW',
				'ps',
				'fa_IR',
				'fa_AF',
				'pcd',
				'pl_PL',
				'pt_AO',
				'pt_BR',
				'pt_PT',
				'ro_RO',
				'roh',
				'ru_RU',
				'rue',
				'sah',
				'sa_IN',
				'skr',
				'srd',
				'gd',
				'sr_RS',
				'sna',
				'sq_XK',
				'scn',
				'szl',
				'snd',
				'si_LK',
				'sk_SK',
				'sl_SI',
				'so_SO',
				'es_AR',
				'es_CL',
				'es_CO',
				'es_CR',
				'es_DO',
				'es_EC',
				'es_GT',
				'es_HN',
				'es_MX',
				'es_PE',
				'es_PR',
				'es_ES',
				'es_UY',
				'es_VE',
				'su_ID',
				'sw',
				'ssw',
				'sv_SE',
				'gsw',
				'syr',
				'tl',
				'tg',
				'zgh',
				'tzm',
				'ta_IN',
				'ta_LK',
				'tt_RU',
				'te',
				'th',
				'bo',
				'tir',
				'tr_TR',
				'tuk',
				'twd',
				'uk',
				'hsb',
				'ur',
				'uz_UZ',
				'vec',
				'vi',
				'wa',
				'cy',
				'wol',
				'xho',
				'yor',
				'zul',
			],
		},
		barcode_scanning_buffer: {
			title: 'Barcode scanning buffer',
			type: 'integer',
			default: 500,
		},
		barcode_scanning_min_chars: {
			title: 'Barcode minimum length',
			type: 'integer',
			default: 8,
		},
		barcode_scanning_prefix: {
			title: 'Barcode scanner prefix',
			type: 'string',
		},
		barcode_scanning_suffix: {
			title: 'Barcode scanner suffix',
			type: 'string',
		},
	},
} as const;

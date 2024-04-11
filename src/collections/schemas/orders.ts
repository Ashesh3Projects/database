export const ordersLiteral = {
	title: 'WooCommerce Order schema',
	version: 0,
	description: 'WooCommerce Order schema',
	type: 'object',
	primaryKey: 'uuid',
	properties: {
		uuid: {
			description: 'Unique identifier for the resource.',
			type: 'string',
			maxLength: 36,
		},
		id: {
			type: 'integer',
		},
		parent_id: {
			description: 'Parent order ID.',
			type: 'integer',
		},
		number: {
			type: 'string',
		},
		order_key: {
			type: 'string',
		},
		created_via: {
			type: 'string',
		},
		version: {
			type: 'string',
		},
		status: {
			default: 'pending',
			description: 'Order status.',
			type: 'string',
		},
		currency: {
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
			description: 'Currency the order was created with, in ISO format.',
			type: 'string',
		},
		date_created: {
			type: 'string',
		},
		date_created_gmt: {
			type: 'string',
		},
		date_modified: {
			type: 'string',
		},
		date_modified_gmt: {
			type: 'string',
		},
		discount_total: {
			type: 'string',
		},
		discount_tax: {
			type: 'string',
		},
		shipping_total: {
			type: 'string',
		},
		shipping_tax: {
			type: 'string',
		},
		cart_tax: {
			type: 'string',
		},
		total: {
			type: 'string',
		},
		total_tax: {
			type: 'string',
		},
		prices_include_tax: {
			type: 'boolean',
		},
		customer_id: {
			default: 0,
			description: 'User ID who owns the order. 0 for guests.',
			type: 'integer',
		},
		customer_ip_address: {
			type: 'string',
		},
		customer_user_agent: {
			type: 'string',
		},
		customer_note: {
			description: 'Note left by customer during checkout.',
			type: 'string',
		},
		billing: {
			description: 'Billing address.',
			type: 'object',
			properties: {
				first_name: {
					type: 'string',
				},
				last_name: {
					type: 'string',
				},
				company: {
					type: 'string',
				},
				address_1: {
					type: 'string',
				},
				address_2: {
					type: 'string',
				},
				city: {
					type: 'string',
				},
				postcode: {
					type: 'string',
				},
				country: {
					type: 'string',
				},
				state: {
					type: 'string',
				},
				email: {
					type: 'string',
				},
				phone: {
					type: 'string',
				},
			},
		},
		shipping: {
			description: 'Shipping address.',
			type: 'object',
			properties: {
				first_name: {
					type: 'string',
				},
				last_name: {
					type: 'string',
				},
				company: {
					type: 'string',
				},
				address_1: {
					type: 'string',
				},
				address_2: {
					type: 'string',
				},
				city: {
					type: 'string',
				},
				postcode: {
					type: 'string',
				},
				country: {
					type: 'string',
				},
				state: {
					type: 'string',
				},
			},
		},
		payment_method: {
			description: 'Payment method ID.',
			type: 'string',
		},
		payment_method_title: {
			description: 'Payment method title.',
			type: 'string',
		},
		transaction_id: {
			description: 'Unique transaction ID.',
			type: 'string',
		},
		date_paid: {
			type: 'string',
		},
		date_paid_gmt: {
			type: 'string',
		},
		date_completed: {
			type: 'string',
		},
		date_completed_gmt: {
			type: 'string',
		},
		cart_hash: {
			type: 'string',
		},
		meta_data: {
			description: 'Meta data.',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						description: 'Meta ID.',
						type: 'integer',
					},
					key: {
						description: 'Meta key.',
						type: 'string',
					},
					value: {
						description: 'Meta value.',
						type: 'string',
					},
				},
			},
		},
		line_items: {
			description: 'Line items data.',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						description: 'Item ID.',
						type: 'integer',
					},
					name: {
						description: 'Product name.',
						type: 'string',
					},
					product_id: {
						description: 'Product ID.',
						type: 'integer',
					},
					variation_id: {
						description: 'Variation ID, if applicable.',
						type: 'integer',
					},
					parent_name: {
						type: 'string',
					},
					sku: {
						description: 'Product SKU.',
						type: 'string',
					},
					price: {
						description: 'Product price.',
						type: 'number',
					},
					quantity: {
						description: 'Quantity ordered.',
						type: 'number',
					},
					tax_class: {
						description: 'Tax class of product.',
						type: 'string',
					},
					subtotal: {
						description: 'Line subtotal (before discounts).',
						type: 'string',
					},
					subtotal_tax: {
						description: 'Line subtotal tax (before discounts).',
						type: 'string',
					},
					total: {
						description: 'Line total (after discounts).',
						type: 'string',
					},
					total_tax: {
						description: 'Line total tax (after discounts).',
						type: 'string',
					},
					taxes: {
						description: 'Line taxes.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Tax rate ID.',
									type: 'integer',
								},
								total: {
									description: 'Tax total.',
									type: 'string',
								},
								subtotal: {
									description: 'Tax subtotal.',
									type: 'string',
								},
							},
						},
					},
					meta_data: {
						description: 'Meta data.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Meta ID.',
									type: 'integer',
								},
								key: {
									description: 'Meta key.',
									type: 'string',
								},
								value: {
									description: 'Meta value.',
									type: 'string',
								},
								display_key: {
									description: 'Display key.',
									type: 'string',
								},
								display_value: {
									description: 'Display value.',
									type: 'string',
								},
							},
						},
					},
					image: {
						description: 'Product image.',
						type: 'object',
						properties: {
							id: {
								description: 'Image ID.',
								type: 'integer',
							},
							src: {
								description: 'Image URL.',
								type: 'string',
							},
						},
					},
				},
			},
		},
		tax_lines: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
					},
					rate_code: {
						type: 'string',
					},
					rate_id: {
						type: 'integer',
					},
					label: {
						type: 'string',
					},
					compound: {
						type: 'boolean',
					},
					tax_total: {
						type: 'string',
					},
					shipping_tax_total: {
						type: 'string',
					},
					rate_percent: {
						type: 'number',
					},
					meta_data: {
						description: 'Meta data.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Meta ID.',
									type: 'integer',
								},
								key: {
									description: 'Meta key.',
									type: 'string',
								},
								value: {
									description: 'Meta value.',
									type: 'string',
								},
							},
						},
					},
				},
			},
		},
		shipping_lines: {
			description: 'Shipping lines data.',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
					},
					method_title: {
						description: 'Shipping method name.',
						type: 'string',
					},
					method_id: {
						description: 'Shipping method ID.',
						type: 'string',
					},
					instance_id: {
						description: 'Shipping instance ID.',
						type: 'string',
					},
					total: {
						description: 'Line total (after discounts).',
						type: 'string',
					},
					total_tax: {
						description: 'Line total tax (after discounts).',
						type: 'string',
					},
					taxes: {
						description: 'Line taxes.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Tax rate ID.',
									type: 'integer',
								},
								total: {
									description: 'Tax total.',
									type: 'string',
								},
							},
						},
					},
					meta_data: {
						description: 'Meta data.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Meta ID.',
									type: 'integer',
								},
								key: {
									description: 'Meta key.',
									type: 'string',
								},
								value: {
									description: 'Meta value.',
									type: 'string',
								},
							},
						},
					},
				},
			},
		},
		fee_lines: {
			description: 'Fee lines data.',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
					},
					name: {
						description: 'Fee name.',
						type: 'string',
					},
					amount: {
						description: 'Fee amount.',
						type: 'string',
					},
					tax_class: {
						description: 'Tax class of fee.',
						type: 'string',
					},
					tax_status: {
						description: 'Tax status of fee.',
						type: 'string',
						enum: ['taxable', 'none'],
					},
					total: {
						description: 'Line total (after discounts).',
						type: 'string',
					},
					total_tax: {
						description: 'Line total tax (after discounts).',
						type: 'string',
					},
					taxes: {
						description: 'Line taxes.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Tax rate ID.',
									type: 'integer',
								},
								total: {
									description: 'Tax total.',
									type: 'string',
								},
								subtotal: {
									description: 'Tax subtotal.',
									type: 'string',
								},
							},
						},
					},
					meta_data: {
						description: 'Meta data.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Meta ID.',
									type: 'integer',
								},
								key: {
									description: 'Meta key.',
									type: 'string',
								},
								value: {
									description: 'Meta value.',
									type: 'string',
								},
							},
						},
					},
				},
			},
		},
		coupon_lines: {
			description: 'Coupons line data.',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						description: 'Item ID.',
						type: 'integer',
					},
					code: {
						description: 'Coupon code.',
						type: 'string',
					},
					discount: {
						description: 'Discount total.',
						type: 'string',
					},
					discount_tax: {
						description: 'Discount total tax.',
						type: 'string',
					},
					meta_data: {
						description: 'Meta data.',
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									description: 'Meta ID.',
									type: 'integer',
								},
								key: {
									description: 'Meta key.',
									type: 'string',
								},
								value: {
									description: 'Meta value.',
									type: 'string',
								},
							},
						},
					},
				},
			},
		},
		refunds: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
					},
					reason: {
						type: 'string',
					},
					total: {
						type: 'string',
					},
				},
			},
		},
		currency_symbol: {
			type: 'string',
		},
		payment_url: {
			type: 'string',
		},
		set_paid: {
			default: false,
			type: 'boolean',
		},
		is_editable: {
			type: 'boolean',
		},
		needs_payment: {
			type: 'boolean',
		},
		needs_processing: {
			type: 'boolean',
		},
		links: {
			type: 'object',
			properties: {
				collection: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							href: {
								type: 'string',
							},
						},
					},
				},
				self: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							href: {
								type: 'string',
							},
						},
					},
				},
				payment: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							href: {
								type: 'string',
							},
						},
					},
				},
				receipt: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							href: {
								type: 'string',
							},
						},
					},
				},
			},
		},
	},
} as const;

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * WooCommerce Order Line Item schema
 */
export interface WooCommerceOrderShippingLineSchema {
	/**
	 * Item ID.
	 */
	id: string;
	order_id?: string;
	/**
	 * Product name.
	 */
	name?: string;
	/**
	 * Product ID.
	 */
	product_id?: number;
	/**
	 * Variation ID, if applicable.
	 */
	variation_id?: number;
	/**
	 * Quantity ordered.
	 */
	quantity?: number;
	/**
	 * Tax class of product.
	 */
	tax_class?: string;
	/**
	 * Line subtotal (before discounts).
	 */
	subtotal?: string;
	/**
	 * Line subtotal tax (before discounts).
	 */
	subtotal_tax?: string;
	/**
	 * Line total (after discounts).
	 */
	total?: string;
	/**
	 * Line total tax (after discounts).
	 */
	total_tax?: string;
	/**
	 * Line taxes.
	 */
	taxes?: {
		/**
		 * Tax rate ID.
		 */
		id?: number;
		/**
		 * Tax total.
		 */
		total?: string;
		/**
		 * Tax subtotal.
		 */
		subtotal?: string;
		[k: string]: any;
	}[];
	/**
	 * Meta data.
	 */
	meta_data?: {
		/**
		 * Meta ID.
		 */
		id?: number;
		/**
		 * Meta key.
		 */
		key?: string;
		/**
		 * Meta value.
		 */
		value?: string;
		[k: string]: any;
	}[];
	/**
	 * Product SKU.
	 */
	sku?: string;
	/**
	 * Product price.
	 */
	price?: number;
	[k: string]: any;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * WooCommerce Payment Gateway schema
 */
export interface WooCommercePaymentGatewaySchema {
  /**
   * Unique local identifier for the resource.
   */
  uuid?: string;
  id?: string;
  description?: string;
  order?: number;
  enabled?: boolean;
  title?: string;
  method_title?: string;
  method_description?: string;
  method_supports?: string[];
  connection_url?: string;
  links?: {
    collection?: {
      href?: string;
      [k: string]: any;
    }[];
    self?: {
      href?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}

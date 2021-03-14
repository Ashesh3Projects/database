/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * WooCommerce Customer schema
 */
export interface WooCommerceCustomerSchema {
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  dateCreated?: string;
  dateCreatedGmt?: string;
  dateModified?: string;
  dateModifiedGmt?: string;
  /**
   * The email address for the customer.
   */
  email?: string;
  /**
   * Customer first name.
   */
  firstName?: string;
  /**
   * Customer last name.
   */
  lastName?: string;
  role?: string;
  /**
   * Customer login name.
   */
  username?: string;
  /**
   * Customer password.
   */
  password?: string;
  /**
   * List of billing address data.
   */
  billing?: {
    firstName?: string;
    lastName?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    postcode?: string;
    country?: string;
    state?: string;
    email?: string;
    phone?: string;
    [k: string]: any;
  };
  /**
   * List of shipping address data.
   */
  shipping?: {
    firstName?: string;
    lastName?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    postcode?: string;
    country?: string;
    state?: string;
    [k: string]: any;
  };
  isPayingCustomer?: boolean;
  avatarUrl?: string;
  /**
   * Meta data.
   */
  metaData?: {
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
  [k: string]: any;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * WordPress site
 */
export interface SiteSchema {
  /**
   * Unique local identifier for the resource.
   */
  localID?: string;
  url?: string;
  name?: string;
  description?: string;
  home?: string;
  gmt_offset?: string;
  timezone_string?: string;
  wp_api_url?: string;
  wc_api_url?: string;
  wc_api_auth_url?: string;
  wp_credentials?: string[];
  [k: string]: any;
}

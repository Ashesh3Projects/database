/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * Global app user - different to WordPress user
 */
export interface UserSchema {
  /**
   * Unique local identifier for the resource.
   */
  localID?: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  sites?: string[];
  [k: string]: any;
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * WooCommerce Order schema
 */
export interface WooCommerceOrderSchema {
  /**
   * Unique local identifier for the resource.
   */
  localID: string;
  id?: number;
  /**
   * Parent order ID.
   */
  parent_id?: number;
  number?: string;
  order_key?: string;
  created_via?: string;
  version?: string;
  /**
   * Order status.
   */
  status?:
    | "pending"
    | "processing"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "refunded"
    | "failed"
    | "pos-open"
    | "pos-checkout";
  /**
   * Currency the order was created with, in ISO format.
   */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BRL"
    | "BSD"
    | "BTC"
    | "BTN"
    | "BWP"
    | "BYR"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHF"
    | "CLP"
    | "CNY"
    | "COP"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CZK"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EGP"
    | "ERN"
    | "ETB"
    | "EUR"
    | "FJD"
    | "FKP"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "IRT"
    | "ISK"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRU"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NOK"
    | "NPR"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PYG"
    | "QAR"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SLL"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "UYU"
    | "UZS"
    | "VEF"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XCD"
    | "XOF"
    | "XPF"
    | "YER"
    | "ZAR"
    | "ZMW";
  date_created?: string;
  date_created_gmt?: string;
  date_modified?: string;
  date_modified_gmt?: string;
  discount_total?: string;
  discount_tax?: string;
  shipping_total?: string;
  shipping_tax?: string;
  cart_tax?: string;
  total?: string;
  total_tax?: string;
  prices_include_tax?: boolean;
  /**
   * User ID who owns the order. 0 for guests.
   */
  customer_id?: number;
  customer_ip_address?: string;
  customer_user_agent?: string;
  /**
   * Note left by customer during checkout.
   */
  customer_note?: string;
  /**
   * Billing address.
   */
  billing?: {
    [k: string]: any;
  };
  /**
   * Shipping address.
   */
  shipping?: {
    [k: string]: any;
  };
  /**
   * Payment method ID.
   */
  payment_method?: string;
  /**
   * Payment method title.
   */
  payment_method_title?: string;
  /**
   * Unique transaction ID.
   */
  transaction_id?: string;
  date_paid?: string | null;
  date_paid_gmt?: string | null;
  date_completed?: string | null;
  date_completed_gmt?: string | null;
  cart_hash?: string;
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
   * Line items data.
   */
  line_items?: string[];
  tax_lines?: {
    id?: number;
    rate_code?: string;
    rate_id?: number;
    label?: string;
    compound?: boolean;
    tax_total?: string;
    shipping_tax_total?: string;
    rate_percent?: number;
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
    [k: string]: any;
  }[];
  /**
   * Shipping lines data.
   */
  shipping_lines?: string[];
  /**
   * Fee lines data.
   */
  fee_lines?: string[];
  /**
   * Coupons line data.
   */
  coupon_lines?: {
    /**
     * Item ID.
     */
    id?: number;
    /**
     * Coupon code.
     */
    code?: string;
    /**
     * Discount total.
     */
    discount?: string;
    /**
     * Discount total tax.
     */
    discount_tax?: string;
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
    [k: string]: any;
  }[];
  refunds?: {
    id?: number;
    reason?: string;
    total?: string;
    [k: string]: any;
  }[];
  currency_symbol?: string;
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

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
   * Parent order ID.
   */
  parent_id?: number;
  /**
   * Order status.
   */
  status?: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed";
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
  /**
   * User ID who owns the order. 0 for guests.
   */
  customer_id?: number;
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
    value?: {
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  /**
   * Line items data.
   */
  line_items?: {
    /**
     * Item ID.
     */
    id?: number;
    /**
     * Product name.
     */
    name?: {
      [k: string]: any;
    };
    /**
     * Product ID.
     */
    product_id?: {
      [k: string]: any;
    };
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
      value?: {
        [k: string]: any;
      };
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
  }[];
  /**
   * Shipping lines data.
   */
  shipping_lines?: {
    /**
     * Item ID.
     */
    id?: number;
    /**
     * Shipping method name.
     */
    method_title?: {
      [k: string]: any;
    };
    /**
     * Shipping method ID.
     */
    method_id?: {
      [k: string]: any;
    };
    /**
     * Shipping instance ID.
     */
    instance_id?: string;
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
      value?: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    [k: string]: any;
  }[];
  /**
   * Fee lines data.
   */
  fee_lines?: {
    /**
     * Item ID.
     */
    id?: number;
    /**
     * Fee name.
     */
    name?: {
      [k: string]: any;
    };
    /**
     * Tax class of fee.
     */
    tax_class?: string;
    /**
     * Tax status of fee.
     */
    tax_status?: "taxable" | "none";
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
      value?: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    [k: string]: any;
  }[];
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
    code?: {
      [k: string]: any;
    };
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
  /**
   * Define if the order is paid. It will set the status to processing and reduce stock items.
   */
  set_paid?: boolean;
  [k: string]: any;
}

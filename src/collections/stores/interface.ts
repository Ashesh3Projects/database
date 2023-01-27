/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * save, and this file will regenerate automatically.
 */

/**
 * The street address for your business location.
 */
export type AddressLine1 = string;
/**
 * An additional, optional address line for your business location.
 */
export type AddressLine2 = string;
/**
 * The city in which your business is located.
 */
export type City = string;
/**
 * The country and state or province, if any, in which your business is located.
 */
export type CountryState = string;
/**
 * The postal code, if any, in which your business is located.
 */
export type PostcodeZIP = string;
export type DefaultCustomerLocation = "" | "base" | "geolocation" | "geolocation_ajax";
/**
 * Enable tax rates and calculations
 */
export type EnableTaxes = "yes" | "no";
/**
 * Enable the use of coupon codes
 */
export type EnableCoupons = "yes" | "no";
/**
 * This controls what currency prices are listed at in the catalog and which currency gateways will take payments in.
 */
export type Currency =
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
 * This controls the position of the currency symbol.
 */
export type CurrencyPosition = "left" | "right" | "left_space" | "right_space";
/**
 * This sets the thousand separator of displayed prices.
 */
export type ThousandSeparator = string;
/**
 * This sets the decimal separator of displayed prices.
 */
export type DecimalSeparator = string;
/**
 * This sets the number of decimals of displayed prices.
 */
export type NumberOfDecimals = number;
export type PricesEnteredWithTax = "yes" | "no";
export type CalculateTaxBasedOn = "shipping" | "billing" | "base";
/**
 * Optionally control which tax class shipping gets, or leave it so shipping tax is based on the cart items themselves.
 */
export type ShippingTaxClass = "inherit" | "" | "reduced-rate" | "zero-rate";
/**
 * Round tax at subtotal level, instead of rounding per line
 */
export type Rounding = "yes" | "no";
export type DisplayPricesInTheShop = "incl" | "excl";
export type DisplayPricesDuringCartAndCheckout = "incl" | "excl";
export type PriceDisplaySuffix = string;
export type DisplayTaxTotals = "single" | "itemized";
export type Language =
  | "af"
  | "ak"
  | "sq"
  | "arq"
  | "am"
  | "ar"
  | "hy"
  | "frp"
  | "as"
  | "ast"
  | "az"
  | "ba"
  | "eu"
  | "bel"
  | "bn_BD"
  | "bn_IN"
  | "bho"
  | "brx"
  | "gax"
  | "bs_BA"
  | "bre"
  | "bg_BG"
  | "ca"
  | "ceb"
  | "zh_CN"
  | "zh_HK"
  | "zh_SG"
  | "zh_TW"
  | "cor"
  | "co"
  | "hr"
  | "cs_CZ"
  | "da_DK"
  | "dv"
  | "nl_NL"
  | "nl_BE"
  | "dzo"
  | "en_US"
  | "en_AU"
  | "en_CA"
  | "en_NZ"
  | "en_ZA"
  | "en_GB"
  | "eo"
  | "et"
  | "ewe"
  | "fo"
  | "fi"
  | "fon"
  | "fr_BE"
  | "fr_CA"
  | "fr_FR"
  | "fy"
  | "fur"
  | "fuc"
  | "gl_ES"
  | "ka_GE"
  | "de_DE"
  | "de_AT"
  | "de_CH"
  | "el"
  | "kal"
  | "gu"
  | "hat"
  | "hau"
  | "haw_US"
  | "he_IL"
  | "hi_IN"
  | "hu_HU"
  | "is_IS"
  | "ido"
  | "ibo"
  | "id_ID"
  | "ga"
  | "it_IT"
  | "ja"
  | "jv_ID"
  | "kab"
  | "kn"
  | "kaa"
  | "kk"
  | "km"
  | "kin"
  | "ky_KY"
  | "ko_KR"
  | "kmr"
  | "ckb"
  | "kir"
  | "lo"
  | "la"
  | "lv"
  | "lij"
  | "li"
  | "lin"
  | "lt_LT"
  | "lmo"
  | "dsb"
  | "lug"
  | "lb_LU"
  | "mk_MK"
  | "mai"
  | "mg_MG"
  | "ms_MY"
  | "ml_IN"
  | "mlt"
  | "mri"
  | "mr"
  | "mfe"
  | "mn"
  | "me_ME"
  | "ary"
  | "my_MM"
  | "ne_NP"
  | "pcm"
  | "nb_NO"
  | "nn_NO"
  | "nqo"
  | "oci"
  | "os"
  | "pa_IN"
  | "pap_AW"
  | "pap_CW"
  | "ps"
  | "fa_IR"
  | "fa_AF"
  | "pcd"
  | "pl_PL"
  | "pt_AO"
  | "pt_BR"
  | "pt_PT"
  | "ro_RO"
  | "roh"
  | "ru_RU"
  | "rue"
  | "sah"
  | "sa_IN"
  | "skr"
  | "srd"
  | "gd"
  | "sr_RS"
  | "sna"
  | "sq_XK"
  | "scn"
  | "szl"
  | "snd"
  | "si_LK"
  | "sk_SK"
  | "sl_SI"
  | "so_SO"
  | "es_AR"
  | "es_CL"
  | "es_CO"
  | "es_CR"
  | "es_DO"
  | "es_EC"
  | "es_GT"
  | "es_HN"
  | "es_MX"
  | "es_PE"
  | "es_PR"
  | "es_ES"
  | "es_UY"
  | "es_VE"
  | "su_ID"
  | "sw"
  | "ssw"
  | "sv_SE"
  | "gsw"
  | "syr"
  | "tl"
  | "tg"
  | "zgh"
  | "tzm"
  | "ta_IN"
  | "ta_LK"
  | "tt_RU"
  | "te"
  | "th"
  | "bo"
  | "tir"
  | "tr_TR"
  | "tuk"
  | "twd"
  | "uk"
  | "hsb"
  | "ur"
  | "uz_UZ"
  | "vec"
  | "vi"
  | "wa"
  | "cy"
  | "wol"
  | "xho"
  | "yor"
  | "zul";

/**
 * WooCommerce POS Store
 */
export interface WCPOSStoreSchema {
  /**
   * Unique local identifier for the resource.
   */
  uuid?: string;
  id?: number;
  name?: string;
  store_address?: AddressLine1;
  store_address_2?: AddressLine2;
  store_city?: City;
  default_country?: CountryState;
  store_postcode?: PostcodeZIP;
  default_customer_address?: DefaultCustomerLocation;
  calc_taxes?: EnableTaxes;
  enable_coupons?: EnableCoupons;
  /**
   * Calculate coupon discounts sequentially
   */
  calc_discounts_sequentially?: "yes" | "no";
  currency?: Currency;
  currency_pos?: CurrencyPosition;
  price_thousand_sep?: ThousandSeparator;
  price_decimal_sep?: DecimalSeparator;
  price_num_decimals?: NumberOfDecimals;
  prices_include_tax?: PricesEnteredWithTax;
  tax_based_on?: CalculateTaxBasedOn;
  shipping_tax_class?: ShippingTaxClass;
  tax_round_at_subtotal?: Rounding;
  tax_display_shop?: DisplayPricesInTheShop;
  tax_display_cart?: DisplayPricesDuringCartAndCheckout;
  price_display_suffix?: PriceDisplaySuffix;
  tax_total_display?: DisplayTaxTotals;
  locale?: Language;
  [k: string]: any;
}

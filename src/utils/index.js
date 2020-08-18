// libs import
import { message } from "antd";
// others
import cookieUtils from "./cookieUtils";

/**
 * default http response callback error
 * @param {string} url
 * @param {string} err
 */
const defaultHttpResponseCbError = (url, err) => {
  message.error("ERROR detail in console");
  // eslint-disable-next-line no-console
  console.log("URL：", url);
  // eslint-disable-next-line no-console
  console.log("Detail：", err);
};

/**
 * convert a kebab-case string to camelCase string
 * @param {string} kebabString
 */
const kebabToCamel = kebabString =>
  kebabString.replace(/(-\w)/g, m => m[1].toUpperCase());

/**
 * convert camelCase to snake_case
 * @param {string} camelString
 */
const camelToSnake = camelString =>
  camelString.replace(/[\w]([A-Z])/g, m => `${m[0]}_${m[1]}`).toLowerCase();

/**
 * Define config options
 * @typedef {Object} formatterConfig
 * @property {string} currenyCode - JPY, USD, CNY, KRW
 */
/**
 * format currency. For example:
 * From API: 5010.00
 * Formatter: "￥0,0"
 * Output: "¥5,010"
 * @param {number} currencyNumber - number needs to be converted to currency
 * @param {formatterConfig} options - config formatter
 * TODO: Constant for currencyCode
 */
const formatCurrency = (currencyNumber, { currencyCode = "JPY" } = {}) =>
  ![undefined, null].includes(currencyNumber) &&
  {
    JPY: new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY"
    }).format(currencyNumber)
  }[currencyCode];

/**
 * Define config options
 * @typedef {Object} formatterConfig
 * @property {number} minimumFractionDigits - the number of decimal digits
 */
/**
 * format numbers. For example:
 * 3000.3234353132 -> "3,000.323"
 * 2.0 -> "2.0", 2.012345 -> "2.012" (using minimumFractionDigits = 0, default maximumFractionDigits = 3)
 * @param {number} number - number needs to be converted to string
 * @param {formatterConfig} options - formatter configs
 */
const formatNumber = (number, formatterConfig = { minimumFractionDigits: 0 }) =>
  new Intl.NumberFormat("en-US", formatterConfig).format(number);

/**
 * Format string interpolation - For Example:
 * stringDataSource: "Are you sure you want to delete [0]:[1]?"
 * stringInterpolations: ["01", "Name Item"]
 * stringInterpolations is unlimited element ["01", "AAA", "BBB", ....]
 * result: "Are you sure you want to delete 01:Name Item?"
 * @param {string} stringDataSource - string be localed
 * @param {Array} stringInterpolations - includes item need replace
 */
const formatSI = (stringDataSource, stringInterpolations) => {
  let stringFormatted = stringDataSource;
  stringInterpolations.forEach((item, index) => {
    stringFormatted = stringFormatted.replace(
      new RegExp(`\\[${index}\\]`, "g"),
      item
    );
  });
  return stringFormatted;
};

export {
  cookieUtils,
  defaultHttpResponseCbError,
  kebabToCamel,
  camelToSnake,
  formatCurrency,
  formatNumber,
  formatSI
};

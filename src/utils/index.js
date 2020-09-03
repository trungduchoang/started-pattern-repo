// libs import
import { message } from "antd";

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

export { defaultHttpResponseCbError };

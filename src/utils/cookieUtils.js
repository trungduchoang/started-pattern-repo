// UNUSED FILES
// libs import
import { Cookies } from "react-cookie";
// others
import CONSTANTS from "@/constants";

const cookieUtils = () => {
  const cookies = new Cookies();
  let _service;
  const _getService = () => {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  };
  // get access token
  const getAccessToken = () => cookies.get(CONSTANTS.ACCESS_TOKEN);
  // get refresh token
  const getRefreshToken = () => cookies.get(CONSTANTS.REFRESH_TOKEN);
  // set token
  const setToken = ({ accessToken, refreshToken }) => {
    cookies.set(CONSTANTS.ACCESS_TOKEN, accessToken);
    cookies.set(CONSTANTS.ACCESS_TOKEN, refreshToken);
    // TODO: Add cookie options
    // {
    //   path: "/",
    //   expires: new Date(decodedToken.exp * 1000),
    //   domain: CONSTANTS.COOKIES_DOMAIN,
    //   httpOnly: false
    // }
  };
  const clearToken = () => {
    cookies.remove(CONSTANTS.ACCESS_TOKEN);
    cookies.remove(CONSTANTS.REFRESH_TOKEN);
    // TODO: Add cookie options
  };

  return {
    getService: _getService,
    setToken,
    getAccessToken,
    getRefreshToken,
    clearToken
  };
};

export default cookieUtils;

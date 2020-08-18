// UNUSED FILES
// LocalStorageService.js
const LocalStorageService = () => {
  let _service;
  const _getService = () => {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  };
  const _setToken = tokenObj => {
    localStorage.setItem("access_token", tokenObj.access_token);
    localStorage.setItem("refresh_token", tokenObj.refresh_token);
  };
  const _getAccessToken = () => localStorage.getItem("access_token");
  const _getRefreshToken = () => localStorage.getItem("refresh_token");
  const _clearToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken
  };
};

export default LocalStorageService;

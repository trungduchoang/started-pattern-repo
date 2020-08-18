// UNUSED FILES
import axios from "axios";
import { cookieUtils } from "@/utils";

// cookieService
const cookieService = cookieUtils.getService();

// token response interceptor
export const tokenResponseInterceptor = () => {
  axios.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        // TODO: http://13.232.130.60:8081/v1/auth/token: refresh token flow
        originalRequest.url === "http://13.232.130.60:8081/v1/auth/token"
      ) {
        // router.push('/login');
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = cookieService.getRefreshToken();
        return (
          axios
            // TODO: refresh token flow
            .post("/auth/token", {
              refresh_token: refreshToken
            })
            .then(res => {
              cookieService.setToken(res.data);
              axios.defaults.headers.common.Authorization = `Bearer ${cookieService.getAccessToken()}`;
              return axios(originalRequest);
            })
        );
      }
      return Promise.reject(error);
    }
  );
};

import axios from "axios";
import CONSTANTS from "@/constants";

export const AXIOS_INSTANCE = axios.create({
  baseURL: "Add-your-base-API-here",
  method: CONSTANTS.HTTPS_REQUEST.METHOD.POST
});

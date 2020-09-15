// types
import { TYPES } from "@/constants/actions/MyRequest";
import { ACTION_TYPE } from "@/types/common";
// others
import CONSTANTS from "@/constants";
import request from "@/https/request";

export const fetchMyRequestData = ({ cbSuccess }: ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.PROCESS,
    method: "GET",
    cbSuccess,
    LOADING_ACTION: TYPES.FETCH_MY_REQUEST_DATA_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_MY_REQUEST_DATA_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_MY_REQUEST_DATA_ERROR
  });

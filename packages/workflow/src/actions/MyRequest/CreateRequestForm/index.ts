// types
import { TYPES } from "@/constants/actions/MyRequest";
import { ACTION_TYPE } from "@/types/common";
// others
import CONSTANTS from "@/constants";
import request from "@/https/request";

export const fetchRequestTypes = ({ cbSuccess }: ACTION_TYPE = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.PROCESS_ALL_REQUEST,
    method: "GET",
    cbSuccess,
    LOADING_ACTION: TYPES.FETCH_TYPE_REQUESTS_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_TYPE_REQUESTS_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_TYPE_REQUESTS_ERROR
  });

export const createRequest = ({
  data = {},
  params = {},
  cbSuccess
}: ACTION_TYPE) => {
  return request({
    url: CONSTANTS.ENDPOINTS.PROCESS + params.requestTypeId,
    method: "POST",
    data,
    cbSuccess,
    LOADING_ACTION: TYPES.CREATE_REQUEST_LOADING,
    SUCCESS_ACTION: TYPES.CREATE_REQUEST_SUCCESS,
    ERROR_ACTION: TYPES.CREATE_REQUEST_ERROR
  });
};

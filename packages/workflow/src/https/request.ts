// types
import { REQUEST_TYPE } from "@/types/common";
import { AppDispatch } from "../store";
// others
import { AXIOS_INSTANCE } from "@/environments";
import { defaultHttpResponseCbError } from "@/utils";

type DISPATCH_TYPE = typeof AppDispatch;

const requireParam = (msg: string) => {
  throw Error(msg);
};

const request = ({
  url = requireParam("Url is undefined"),
  method = "POST",
  data,
  params,
  cbSuccess,
  cbError = defaultHttpResponseCbError,
  LOADING_ACTION,
  SUCCESS_ACTION,
  ERROR_ACTION
}: REQUEST_TYPE) => (dispatch: DISPATCH_TYPE) => {
  dispatch({
    type: LOADING_ACTION
  });

  return AXIOS_INSTANCE.request({
    url,
    method,
    data,
    params
  })
    .then((res: { [key: string]: any }) => {
      dispatch({
        type: SUCCESS_ACTION,
        payload: { data: res.data }
      });
      if (cbSuccess)
        cbSuccess({
          data: res.data
        });
    })
    .catch((error: { [key: string]: any }) => {
      dispatch({
        type: ERROR_ACTION,
        payload: { error }
      });
      if (cbError) cbError(url, error);
    });
};

export default request;

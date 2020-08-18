// others
import { AXIOS_INSTANCE } from "@/environment";
import { defaultHttpResponseCbError } from "@/utils";

const requireParam = msg => {
  throw Error(msg);
};

const request = ({
  url = requireParam("Url is undefined"),
  data = null,
  params = null,
  cbSuccess = null,
  cbError = defaultHttpResponseCbError,
  LOADING_ACTION,
  SUCCESS_ACTION,
  ERROR_ACTION
}) => dispatch => {
  dispatch({
    type: LOADING_ACTION
  });
  return AXIOS_INSTANCE.request({
    url,
    data,
    params
  })
    .then(res => {
      dispatch({
        type: SUCCESS_ACTION,
        payload: { data: res.data.body }
      });
      if (cbSuccess)
        cbSuccess({
          data: res.data.body
        });
    })
    .catch(error => {
      dispatch({
        type: ERROR_ACTION,
        payload: { error }
      });
      if (cbError) cbError(url, error);
    });
};

export default request;

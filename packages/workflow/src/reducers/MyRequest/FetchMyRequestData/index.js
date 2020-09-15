import { TYPES } from "@/constants/actions/MyRequest";

const initialState = {
  listMyRequest: [],
  isLoading: false,
  isError: false,
  error: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.FETCH_MY_REQUEST_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {}
      };
    case TYPES.FETCH_MY_REQUEST_DATA_SUCCESS:
      return {
        ...state,
        listMyRequest: payload.data,
        isLoading: false,
        isError: false
      };
    case TYPES.FETCH_MY_REQUEST_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error
      };
    default:
      return { ...state };
  }
}

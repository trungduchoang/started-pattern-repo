import { TYPES } from "@/constants/actions/MyRequest";

const initialState = {
  listRequestTypes: [],
  isLoading: false,
  isError: false,
  error: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.FETCH_TYPE_REQUESTS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {}
      };
    case TYPES.FETCH_TYPE_REQUESTS_SUCCESS:
      return {
        ...state,
        listRequestTypes: payload.data,
        isLoading: false,
        isError: false
      };
    case TYPES.FETCH_TYPE_REQUESTS_ERROR:
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

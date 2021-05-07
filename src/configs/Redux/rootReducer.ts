// libs
import { combineReducers } from "redux";
// reducers
import * as reducers from "@/redux/reducers";

export const rootReducer = combineReducers({
  ...reducers,
});
export type ROOT_STATE = ReturnType<typeof rootReducer>;
export type PAGES_REDUCER = keyof ROOT_STATE;

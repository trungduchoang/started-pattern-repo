import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "@/reducers";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducers = Object.keys(reducers).reduce(
  (accReducers, reducerKey) => ({
    ...accReducers,
    [reducerKey]: combineReducers(reducers[reducerKey])
  }),
  {}
);

const combinedReducers = combineReducers(mainReducers);

const rootReducer = (state, action) => combinedReducers(state, action);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
const AppDispatch = store.dispatch;

// TODO: Refactor me to .ts to export default store, + export type here
export { AppDispatch, store };

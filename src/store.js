import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // TODO: Create Reducer to replace default {} ↓
  () => ({}),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

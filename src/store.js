import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sampleReducers = {
  SAMPLE_REDUCER: (state = [], action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
};
const appReducer = combineReducers(sampleReducers);

const rootReducer = (state, action) =>
  appReducer(action.type === "CLEAR_STORE" ? undefined : state, action);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

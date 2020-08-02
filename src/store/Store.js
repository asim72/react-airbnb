import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { hotelReducer } from "../reducers/hotelreducer";
import thunk from "redux-thunk";

const middleware = [thunk];

let store = createStore(
  combineReducers({
    hotel: hotelReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

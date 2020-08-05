import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { hotelReducer } from "../reducers/hotelreducer";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

let store = createStore(
  combineReducers({
    hotel: hotelReducer,
    form: formReducer,
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

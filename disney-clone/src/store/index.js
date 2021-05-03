import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import selMovie from "../reducer/selMovie";
import userLogin from "../reducer/userLogin";

import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  movie: [],
  user: {
    name: "",
    email: "",
    photo: "",
  },
};

const bigReducer = combineReducers({
  movie: selMovie,
  user: userLogin,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}

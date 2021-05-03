import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import selMovie from "../reducer/selMovie";

import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  movie: [],
};

const bigReducer = combineReducers({
  movie: selMovie,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}

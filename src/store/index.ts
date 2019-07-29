import { combineReducers, createStore, Store, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { BooksState } from "./books/types";
import booksReducer from "./books";
import routesReducer from "./routes";

export interface ApplicationState {
  bookState: BooksState;
}

const combinedReducers = combineReducers({
  bookState: booksReducer,
  routeState: routesReducer
});

const store: Store<ApplicationState> = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

import { combineReducers, createStore, Store, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import booksReducer from "./books";
import routesReducer from "./routes";
import { BooksState } from "./books/types";
import { RouteState } from "./routes/types";

const combinedReducers = combineReducers({
  books: booksReducer,
  routes: routesReducer
});

export interface AppState {
  readonly books: BooksState;
  readonly routes: RouteState;
}

const store: Store<AppState> = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

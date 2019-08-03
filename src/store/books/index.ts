import { Reducer } from "redux";

import { BooksState, BookTypes, BookActions, initialBooksState } from "./types";

const reducer: Reducer<BooksState, BookActions> = (
  state = initialBooksState,
  action
) => {
  switch (action.type) {
    case BookTypes.CLEAR_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    case BookTypes.DO_BOOK_SEARCH:
      return {
        ...state,
        searchResults: action.payload.docs
      };
    case BookTypes.FETCH_BOOK_BY_ID:
      return {
        ...state,
        bookId: action.payload
      };
    case BookTypes.FETCH_BOOKS:
      return {
        ...state,
        list: action.payload
      };
    case BookTypes.SAVE_BOOK:
      return {
        ...state,
        book: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

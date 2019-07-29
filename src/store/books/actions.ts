import {
  BookTypes,
  Book,
  BooksState,
  FetchBooksAction,
  SaveBookAction,
  FetchBookByIdAction
} from "./types";
import { Dispatch, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

export const fetchBooks: ActionCreator<
  ThunkAction<Promise<any>, BooksState, null, FetchBooksAction>
> = (books: Book[]) => {
  return async (dispatch: Dispatch) => {
    return dispatch({ type: BookTypes.FETCH_BOOKS, payload: books });
  };
};

export const fetchBookById: ActionCreator<
  ThunkAction<Promise<any>, BooksState, number, FetchBookByIdAction>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    return dispatch({ type: BookTypes.FETCH_BOOK_BY_ID, payload: id });
  };
};

export const saveBook: ActionCreator<
  ThunkAction<Promise<any>, BooksState, Book, SaveBookAction>
> = (book: Book) => {
  return async (dispatch: Dispatch) => {
    return dispatch({ type: BookTypes.SAVE_BOOK, payload: book });
  };
};

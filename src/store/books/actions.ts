import {
  BookTypes,
  Book,
  FetchBooksAction,
  SaveBookAction,
  FetchBookByIdAction,
  BookRoutes,
  BooksState,
  DoBookSearch
} from "./types";
import { Dispatch, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { getMyBooks, getWishList } from "../../services/BookService";
import { AppRoutes } from "../routes/types";
import BookApi from "../../api/OpenLibrary";
import history from "../../history";

export const clearResults: ActionCreator<
  ThunkAction<Promise<any>, BooksState, null, DoBookSearch>
> = () => {
  return async (dispatch: Dispatch) => {
    return await dispatch({ type: BookTypes.CLEAR_RESULTS, payload: null });
  };
};

export const doBookSearch: ActionCreator<
  ThunkAction<Promise<any>, BooksState, null, DoBookSearch>
> = (bookName: string) => {
  return async (dispatch: Dispatch) => {
    let url = "search.json?title=";
    let words = bookName.split(" ");
    words.map((word: string, index: number) => {
      url += `${word}`;
      if (index < words.length - 1) {
        url += "+";
      }
      return 0;
    });
    const response = await BookApi.search(url);
    history.push(BookRoutes.SEARCH);
    return await dispatch({
      type: BookTypes.DO_BOOK_SEARCH,
      payload: response.data
    });
  };
};

export const fetchBooks: ActionCreator<
  ThunkAction<Promise<any>, BooksState, null, FetchBooksAction>
> = (route: AppRoutes) => {
  return async (dispatch: Dispatch) => {
    let books: Book[];
    if (route === BookRoutes.MY_BOOKS) {
      books = getMyBooks();
    } else {
      books = getWishList();
    }
    return dispatch({ type: BookTypes.FETCH_BOOKS, payload: books });
  };
};

export const fetchBookById: ActionCreator<
  ThunkAction<Promise<any>, BooksState, any, FetchBookByIdAction>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: BookTypes.FETCH_BOOK_BY_ID,
      payload: id
    });
  };
};

export const clearBookId: ActionCreator<
  ThunkAction<Promise<any>, BooksState, number, FetchBookByIdAction>
> = () => {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: BookTypes.FETCH_BOOK_BY_ID,
      payload: null
    });
  };
};

export const saveBook: ActionCreator<
  ThunkAction<Promise<any>, BooksState, Book, SaveBookAction>
> = (book: Book) => {
  return async (dispatch: Dispatch) => {
    return dispatch({ type: BookTypes.SAVE_BOOK, payload: book });
  };
};

/*
  *
  All book types (actions, status, etc)
  *
*/
export enum BookTypes {
  FETCH_BOOKS = "@book/FETCH_BOOKS",
  FETCH_BOOK_BY_ID = "@book/FETCH_BOOK_BY_ID",
  SAVE_BOOK = "@book/SAVE_BOOK",
  DO_BOOK_SEARCH = "@book/DO_BOOK_SEARCH",
  CLEAR_RESULTS = "@book/CLEAR_RESULTS",
  READING = "@book/READING",
  READ = "@book/READ",
  NOT_READ = "@book/NOT_READ",
  NOT_OWNED = "@book/NOT_OWNED"
}

/*
  *
  Routes for book components
  *
*/
export enum BookRoutes {
  MY_BOOKS = "my-books",
  WISH_LIST = "wish-list",
  SEARCH = "search"
}

/*
  *
  Book Model Definition
  *
*/
export interface Book {
  id?: number;
  name: string;
  author: string;
  description?: string;
  readingStatus?: BookTypes;
  genre?: string;
  coverUrl?: string;
}

/*
  *
  Book state definitions
  *
*/
export interface BooksState {
  readonly list: Book[];
  readonly bookId?: number;
  readonly searchResults?: [];
}

/*
  *
  Book related action creators
  *
*/
export interface FetchBooksAction {
  type: typeof BookTypes.FETCH_BOOKS;
  payload: Book[];
}

export interface SaveBookAction {
  type: typeof BookTypes.SAVE_BOOK;
  payload: Book;
}

export interface FetchBookByIdAction {
  type: BookTypes.FETCH_BOOK_BY_ID;
  field: string;
  payload: number;
}

export interface DoBookSearch {
  type: BookTypes.DO_BOOK_SEARCH;
  payload: any;
}

export interface ClearResults {
  type: BookTypes.CLEAR_RESULTS;
  payload: any;
}

export type BookActions =
  | FetchBooksAction
  | SaveBookAction
  | FetchBookByIdAction
  | DoBookSearch
  | ClearResults;

// export const initialBooksState: BooksState = {
//   list: []
// };

/*
  *
  Initial State definition
  *
*/
export const initialBooksState: BooksState = {
  list: []
};

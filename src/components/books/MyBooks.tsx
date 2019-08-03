import React, { useEffect } from "react";

import BookList from "./BookList";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { clearBookId, fetchBooks } from "../../store/books/actions";
import { BookRoutes } from "../../store/books/types";

const MyBooks: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: AppState) => state.books.list);

  useEffect(() => {
    dispatch(fetchBooks(BookRoutes.MY_BOOKS));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearBookId());
    };
  });

  return (
    <>
      <BookList books={books} />
    </>
  );
};

export default MyBooks;

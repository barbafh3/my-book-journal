import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { clearBookId, fetchBooks } from "../../store/books/actions";
import BookList from "./BookList";
import { BookRoutes } from "../../store/books/types";

const WishList: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: AppState) => state.books.list);

  useEffect(() => {
    dispatch(fetchBooks(BookRoutes.WISH_LIST));
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

export default WishList;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { BookRoutes } from "../../store/books/types";
import { clearBookId } from "../../store/books/actions";
import BookList from "./BookList";

const WishList: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: AppState) => state.books.wishList.list);

  useEffect(() => {
    return () => {
      dispatch(clearBookId());
    };
  });

  return (
    <>
      <BookList books={books} route={BookRoutes.WISH_LIST} />
    </>
  );
};

export default WishList;

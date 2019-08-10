import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "semantic-ui-react";

import { clearResults } from "../../store/books/actions";
import { AppState } from "../../store";
import { Book } from "../../store/books/types";
import SearchResultItem from "./SearchResultItem";

const Search = () => {
  const dispatch = useDispatch();
  const results = useSelector(
    (state: AppState) => state.books.searchResults
  ) as [];

  useEffect(() => {
    return () => {
      dispatch(clearResults());
    };
  }, [dispatch]);

  const renderResults = () => {
    if (results && results.length > 0) {
      return (
        <>
          {results.map((item: any, index: number) => {
            let book: Book = {
              id: item.id_librarything as number,
              name: item.title,
              author: item.author_name as string
            };
            return <SearchResultItem book={book} key={book.id + "" + index} />;
          })}
        </>
      );
    } else {
      return <p>Use the search field above to search for books!</p>;
    }
  };

  return (
    <div>
      <List>{renderResults()}</List>
    </div>
  );
};

export default Search;

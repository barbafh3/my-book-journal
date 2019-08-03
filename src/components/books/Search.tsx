import React, { useEffect } from "react";
import { clearResults } from "../../store/books/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { Book } from "../../store/books/types";
import { List } from "semantic-ui-react";

const Search = () => {
  const dispatch = useDispatch();
  const results = useSelector(
    (state: AppState) => state.books.searchResults
  ) as [];

  useEffect(() => {
    return () => {
      dispatch(clearResults());
    };
  }, []);

  const renderResults = () => {
    if (results && results.length > 0) {
      return (
        <>
          {results.map((item: any, index: number) => {
            let book: Book = {
              name: item.title,
              author: "teste"
            };
            console.log(book.name);
            return (
              <>
                <List.Item>
                  <List.Content>
                    <List.Header>
                      {index} - {book.name}
                    </List.Header>
                    <List.Description>{book.author}</List.Description>
                  </List.Content>
                </List.Item>
              </>
            );
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

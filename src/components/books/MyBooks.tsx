import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Grid, Divider, Segment, Icon } from "semantic-ui-react";

import { ApplicationState } from "../../store";
import { Book } from "../../store/books/types";
import BookItem from "./BookItem";
import { Container } from "semantic-ui-react";
import BookDetail from "./BookDetail";

const MyBooks: React.FC = () => {
  const dispatch = useDispatch();

  const books = useSelector((state: ApplicationState) => state.bookState.list);
  const bookId = useSelector(
    (state: ApplicationState) => state.bookState.bookId
  );

  const gridStyle = {
    paddingLeft: "5%",
    paddingRight: "5%"
  };

  useEffect(() => {}, []);

  const renderBookList = () => {
    if (books.length > 0) {
      return (
        <Container>
          {books.map((book: Book) => {
            return (
              <List divided>
                <BookItem book={book} />
              </List>
            );
          })}
        </Container>
      );
    } else {
      return <p>Add some books to show on this list!</p>;
    }
  };

  const getSelectedBook = () => {
    if (bookId) {
      let selectedBook = books.find((book: Book) => book.id === bookId);
      return selectedBook;
    }
  };

  return (
    <Segment style={{ minHeight: "400px" }}>
      <Grid style={gridStyle} columns={2}>
        <Grid.Column style={{ paddingRight: "5%" }}>
          <h1>My Books</h1>
          <br />
          {renderBookList()}
        </Grid.Column>
        <Grid.Column style={{ paddingLeft: "5%" }}>
          <h1>Book Details</h1>
          <br />
          <BookDetail book={getSelectedBook()} />
        </Grid.Column>
      </Grid>
      <Divider vertical>
        <Icon name="chevron circle right" />
      </Divider>
    </Segment>
  );
};

export default MyBooks;

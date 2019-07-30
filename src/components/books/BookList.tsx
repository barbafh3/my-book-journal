import React from "react";
import {
  Segment,
  Grid,
  Divider,
  Icon,
  Container,
  List
} from "semantic-ui-react";
import BookDetail from "./BookDetail";
import { Book, BookProps, BookRoutes } from "../../store/books/types";
import BookItem from "./BookItem";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

const BookList: React.FC<BookProps> = props => {
  const books = props.books as Book[];
  const route = props.route as BookRoutes;

  const bookId = useSelector((state: AppState) => state.books.bookId);

  const gridStyle = {
    paddingLeft: "5%",
    paddingRight: "5%"
  };
  const renderBookList = () => {
    if (books.length > 0) {
      return (
        <Container>
          {books.map((book: Book) => {
            return (
              <List divided>
                <BookItem book={book} route={route} />
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
    let selectedBook = books.find((book: Book) => book.id === bookId);
    return selectedBook;
  };

  const getTitle = () => {
    switch (route) {
      case BookRoutes.MY_BOOKS:
        return "My Books";
      case BookRoutes.WISH_LIST:
        return "Wish List";
    }
  };

  return (
    <div>
      <Segment style={{ minHeight: "400px" }}>
        <Grid style={gridStyle} columns={2}>
          <Grid.Column style={{ paddingRight: "5%" }}>
            <h1>{getTitle()}</h1>
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
    </div>
  );
};

export default BookList;

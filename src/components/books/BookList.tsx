import React from "react";
import { Segment, Grid, Divider, Icon, List } from "semantic-ui-react";
import BookDetail from "./BookDetail";
import { Book, BookRoutes } from "../../store/books/types";
import BookItem from "./BookItem";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { AppRoutes } from "../../store/routes/types";

interface OwnProps {
  books: Book[];
}

const BookList: React.FC<OwnProps> = ({ books }: OwnProps) => {
  const bookId = useSelector((state: AppState) => state.books.bookId);
  const route = useSelector(
    (state: AppState) => state.routes.currentRoute
  ) as AppRoutes;

  const gridStyle = {
    paddingLeft: "5%",
    paddingRight: "5%"
  };
  const renderBookList = () => {
    if (books.length > 0) {
      return (
        <>
          {books.map((book: Book) => {
            return <BookItem book={book} key={book.id} route={route} />;
          })}
        </>
      );
    } else {
      return <p>Add some books to show on this list!</p>;
    }
  };

  const getSelectedBook = () => {
    let selectedBook = books.find((book: Book) => book.id === bookId) as Book;
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
    <>
      <Segment style={{ minHeight: "400px" }}>
        <Grid style={gridStyle} columns={2}>
          <Grid.Column style={{ paddingRight: "5%" }}>
            <h1>{getTitle()}</h1>
            <br />
            <List>{renderBookList()}</List>
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
    </>
  );
};

export default BookList;

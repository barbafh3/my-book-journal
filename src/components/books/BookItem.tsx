import React from "react";
import {
  Book,
  BookProps,
  BookTypes,
  BookRoutes
} from "../../store/books/types";
import { List, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { fetchBookById } from "../../store/books/actions";

const BookItem: React.FC<BookProps> = props => {
  const dispatch = useDispatch();
  const book = props.book as Book;
  const route = props.route as BookRoutes;

  const getColor: any = () => {
    switch (book.readingStatus) {
      case BookTypes.NOT_READ:
        return "red";
      case BookTypes.READ:
        return "green";
      case BookTypes.READING:
        return "yellow";
    }
  };

  const getIcon: any = () => {
    switch (book.readingStatus) {
      case BookTypes.NOT_READ:
        return "circle times";
      case BookTypes.READ:
        return "circle check";
      case BookTypes.READING:
        return "hourglass two";
    }
  };

  const renderIcon = () => {
    if (route === BookRoutes.MY_BOOKS) {
      return (
        <List.Content floated="right">
          <Icon color={getColor()} name={getIcon()} />
        </List.Content>
      );
    }
  };

  const handleClick = async () => {
    await dispatch(fetchBookById(book.id, route));
  };

  return (
    <List.Item key={book.id} as="a" onClick={handleClick}>
      <img
        className="ui mini image"
        style={{ maxHeight: "50px" }}
        alt="book-icon"
        src={book.coverUrl}
      />
      <div className="content">
        <div className="header">{book.name}</div>
        <div className="description">{book.author}</div>
      </div>
      {renderIcon()}
    </List.Item>
  );
};

export default BookItem;

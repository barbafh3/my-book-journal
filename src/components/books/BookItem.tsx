import React from "react";
import { Book, BookProps, BookTypes } from "../../store/books/types";
import { List, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { fetchBookById } from "../../store/books/actions";

const BookItem: React.FC<BookProps> = props => {
  const dispatch = useDispatch();

  const book = props.book as Book;

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

  const handleClick = async () => {
    await dispatch(fetchBookById(book.id));
  };

  return (
    <List.Item as="a" onClick={handleClick}>
      <img
        className="ui mini image"
        alt="book-icon"
        src="https://image.flaticon.com/icons/png/512/130/130304.png"
      />
      <div className="content">
        <div className="header">{book.name}</div>
        <div className="description">{book.author}</div>
      </div>
      <List.Content floated="right">
        <Icon color={getColor()} name={getIcon()} />
      </List.Content>
    </List.Item>
  );
};

export default BookItem;

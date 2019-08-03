import React from "react";
import { Book, BookTypes, BookRoutes } from "../../store/books/types";
import { List, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { fetchBookById } from "../../store/books/actions";
import { AppRoutes } from "../../store/routes/types";

interface OwnProps {
  book: Book;
  route: AppRoutes;
}

const BookItem: React.FC<OwnProps> = ({ book, route }) => {
  const dispatch = useDispatch();

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
    <List.Item as="a" key={book.id} onClick={handleClick}>
      <img
        className="ui mini image"
        style={{ maxHeight: "50px" }}
        alt="book-icon"
        src={book.coverUrl}
      />
      <List.Content>
        <List.Header>{book.name}</List.Header>
        <List.Description>{book.author}</List.Description>
      </List.Content>
      {renderIcon()}
    </List.Item>
  );
};

export default BookItem;

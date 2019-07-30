import React from "react";
import { Item, Container } from "semantic-ui-react";
import { BookProps, Book, BookTypes } from "../../store/books/types";

const BookDetail: React.FC<BookProps> = props => {
  const book = props.book as Book;

  const getReadingStatus = () => {
    switch (book.readingStatus) {
      case BookTypes.READ:
        return "Complete";
      case BookTypes.READING:
        return "Reading";
      case BookTypes.NOT_READ:
        return "Not read";
      case BookTypes.NOT_OWNED:
        return "Not Owned";
    }
  };

  const getStatusColor: any = () => {
    let style: { color?: string } = {};
    switch (book.readingStatus) {
      case BookTypes.READ:
        style.color = "green";
        break;
      case BookTypes.READING:
        style.color = "orange";
        break;
      case BookTypes.NOT_READ:
        style.color = "red";
        break;
      default:
        style.color = "grey";
    }
    return style;
  };

  const renderDetails = () => {
    if (book) {
      return (
        <Item.Group>
          <Item>
            <Item.Image style={{ maxHeight: "150px" }} src={book.coverUrl} />
            <Item.Content>
              <Item.Header>Name: {book.name}</Item.Header>
              <Item.Meta>Author: {book.author}</Item.Meta>
              <Item.Meta>Genre: {book.genre}</Item.Meta>
              <Item.Description>
                Description: {book.description}
              </Item.Description>
              <Item.Extra>
                Status:<p style={getStatusColor()}>{getReadingStatus()}</p>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      );
    } else {
      return (
        <div>Select a book on the list to the left to show its details</div>
      );
    }
  };

  return <Container>{renderDetails()}</Container>;
};

export default BookDetail;

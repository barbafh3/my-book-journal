import React from "react";
import { List } from "semantic-ui-react";
import { Book } from "../../store/books/types";

interface OwnProps {
  book: Book;
}

const SearchResultItem: React.FC<OwnProps> = ({ book }) => {
  return (
    <List.Item key={book.id}>
      <List.Content>
        <List.Header>{book.name}</List.Header>
        <List.Description>{book.author}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default SearchResultItem;

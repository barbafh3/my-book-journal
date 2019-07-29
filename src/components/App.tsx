import React from "react";
import { Route, Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import Header from "./header";
import history from "../history";
import MyBooks from "./books/MyBooks";

const App: React.FC = () => {
  return (
    <Container>
      <Router history={history}>
        <Header />
        <Route path="/my-books" component={MyBooks} />
        {/* <Route path="/wish-list" component={WishList} /> */}
      </Router>
    </Container>
  );
};

export default App;

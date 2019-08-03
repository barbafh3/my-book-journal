import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { pushRoute } from "../../store/routes/actions";
import { AppRoutes } from "../../store/routes/types";
import { BookRoutes } from "../../store/books/types";
import { doBookSearch } from "../../store/books/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = (route: AppRoutes) => {
    dispatch(pushRoute(route));
  };

  const onSubmit = async (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const element = event.target as HTMLInputElement;
      const parent = element.parentElement as HTMLElement;
      const parentClass = parent.getAttribute("class");
      parent.setAttribute("class", parentClass + " loading");
      const bookName = element.value as string;
      await dispatch(doBookSearch(bookName));
      parent.setAttribute("class", "" + parentClass);
    }
  };

  return (
    <Menu>
      <Menu.Item active name="MyBookJournal" />
      <Menu.Item
        name="MyBooks"
        onClick={() => handleClick(BookRoutes.MY_BOOKS)}
      />
      <Menu.Item
        name="WishList"
        onClick={() => handleClick(BookRoutes.WISH_LIST)}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search book title..."
            onKeyPress={onSubmit}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;

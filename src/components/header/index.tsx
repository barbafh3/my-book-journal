import React from "react";
import { Menu } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { pushRoute } from "../../store/routes/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = (route: string) => {
    dispatch(pushRoute(route));
  };

  return (
    <Menu>
      <Menu.Item active name="MyBookJournal" />
      <Menu.Item name="MyBooks" onClick={() => handleClick("my-books")} />
      <Menu.Item name="WishList" onClick={() => handleClick("wish-list")} />
    </Menu>
  );
};

export default Header;

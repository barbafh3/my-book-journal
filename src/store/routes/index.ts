import { Reducer } from "redux";
import { RouteActions } from "./types";

const reducer: Reducer<any, RouteActions> = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

import { Reducer } from "redux";
import { RouteActions, RouteState } from "./types";

const reducer: Reducer<RouteState, RouteActions> = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

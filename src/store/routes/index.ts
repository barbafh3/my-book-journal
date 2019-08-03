import { Reducer } from "redux";
import { RouteActions, RouteState, RouteTypes } from "./types";

const reducer: Reducer<RouteState, RouteActions> = (state = {}, action) => {
  switch (action.type) {
    case RouteTypes.PUSH_ROUTE:
      const lastRoute = state.currentRoute;
      return {
        ...state,
        currentRoute: action.payload,
        lastRoute
      };
    default:
      return state;
  }
};

export default reducer;

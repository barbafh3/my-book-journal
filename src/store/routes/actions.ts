import { Dispatch, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RouteTypes, AppRoutes, PushRoute, RouteState } from "./types";
import history from "../../history";

export const pushRoute: ActionCreator<
  ThunkAction<Promise<any>, RouteState, AppRoutes, PushRoute>
> = (route: AppRoutes) => {
  return async (dispatch: Dispatch) => {
    history.push(`${route}`);
    return dispatch({ type: RouteTypes.PUSH_ROUTE, payload: route });
  };
};

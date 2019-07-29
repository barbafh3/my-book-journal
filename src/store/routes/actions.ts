import { Dispatch, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { PushRoute, RouteTypes } from "./types";
import history from "../../history";

export const pushRoute: ActionCreator<
  ThunkAction<Promise<any>, null, null, PushRoute>
> = (route: string) => {
  return async (dispatch: Dispatch) => {
    history.push(route);
    return dispatch({ type: RouteTypes.PUSH_ROUTE });
  };
};

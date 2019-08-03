import { BookRoutes } from "../books/types";

export enum RouteTypes {
  PUSH_ROUTE = "@routes/PUSH_ROUTE",
  SAVE_ROUTE = "@routes/SAVE_ROUTE",
  SET_ROUTE = "@routes/SET_ROUTE"
}

export enum MainRoutes {
  MAIN_ROUTE = ""
}

export type AppRoutes = MainRoutes | BookRoutes;

export interface PushRoute {
  type: RouteTypes.PUSH_ROUTE;
  payload: AppRoutes;
}

export interface SaveRoute {
  type: RouteTypes.SAVE_ROUTE;
}

export interface RouteState {
  currentRoute?: AppRoutes;
  lastRoute?: AppRoutes;
}

export type RouteActions = PushRoute | SaveRoute;

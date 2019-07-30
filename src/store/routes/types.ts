export enum RouteTypes {
  PUSH_ROUTE = "@routes/PUSH_ROUTE",
  SAVE_ROUTE = "@routes/SAVE_ROUTE"
}

export interface PushRoute {
  type: RouteTypes.PUSH_ROUTE;
}

export interface SaveRoute {
  type: RouteTypes.SAVE_ROUTE;
}

export interface RouteState {}

export type RouteActions = PushRoute | SaveRoute;

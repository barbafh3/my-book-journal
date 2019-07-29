export enum RouteTypes {
  PUSH_ROUTE = "@routes/PUSH_ROUTE"
}

export interface PushRoute {
  type: RouteTypes.PUSH_ROUTE;
}

export type RouteActions = PushRoute;

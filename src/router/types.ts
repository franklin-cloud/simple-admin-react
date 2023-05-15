import { LazyExoticComponent } from "react";

export interface RouteItemType {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  needAuth: boolean;
  isMenu: boolean;
  permissions: null | string[];
  children?: RouteItemType[];
}

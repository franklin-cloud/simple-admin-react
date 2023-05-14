import { LazyExoticComponent } from "react";

export interface RouteconfigObject {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  needAuth: boolean;
  isMenu: boolean;
  permissions: string[];
  defaultRoute?: boolean;
  children?: RouteconfigObject[];
}

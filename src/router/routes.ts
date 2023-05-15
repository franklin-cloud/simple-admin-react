import { lazy } from "react";
import { RouteItemType } from "./types";

const LayoutPage = lazy(() => import("../views/layout/index"));
const AccountPage = lazy(() => import("../views/account/index"));
const UserPage = lazy(() => import("../views/user/index"));

export const LoginPage = lazy(() => import("../views/login/index"));
export const NotFoundPage = lazy(() => import("../views/notFound/index"));

export const constantRouteConfig: RouteItemType[] = [
  {
    path: "login",
    element: LoginPage,
    needAuth: false,
    isMenu: false,
    permissions: null,
  },
];

export const dynamicRouteConfig: RouteItemType[] = [
  {
    path: "main",
    element: LayoutPage,
    needAuth: false,
    isMenu: false,
    permissions: null,
    children: [
      {
        path: "account",
        element: AccountPage,
        needAuth: true,
        isMenu: true,
        permissions: ["1"],
      },
      {
        path: "user",
        element: UserPage,
        needAuth: true,
        isMenu: true,
        permissions: ["0"],
      },
      {
        path: "*",
        element: NotFoundPage,
        needAuth: true,
        isMenu: false,
        permissions: [],
      },
    ],
  },
];

export const allRouteConfig: RouteItemType[] = [...constantRouteConfig, ...dynamicRouteConfig];

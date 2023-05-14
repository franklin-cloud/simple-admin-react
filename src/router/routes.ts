import { lazy } from "react";
import { RouteconfigObject } from "./types";
const LoginPage = lazy(() => import("../views/login/index"));
const LayoutPage = lazy(() => import("../views/layout/index"));
const AccountPage = lazy(() => import("../views/account/index"));
const UserPage = lazy(() => import("../views/user/index"));
const NotFoundPage = lazy(() => import("../views/notFound/index"));

export const constantRouteConfig: RouteconfigObject[] = [
  {
    path: "login",
    element: LoginPage,
    needAuth: false,
    isMenu: false,
    permissions: [""],
  },
];

export const dynamicRouteConfig: RouteconfigObject[] = [
  {
    path: "/",
    element: LayoutPage,
    needAuth: true,
    isMenu: false,
    permissions: ["1"],
    children: [
      {
        path: "account",
        element: AccountPage,
        needAuth: true,
        isMenu: true,
        permissions: ["1"],
        defaultRoute: true,
      },
      {
        path: "user",
        element: UserPage,
        needAuth: true,
        isMenu: true,
        permissions: ["1"],
      },
      {
        path: "*",
        element: NotFoundPage,
        needAuth: true,
        isMenu: false,
        permissions: [""],
      },
    ],
  },
];

export const allRouteConfig: RouteconfigObject[] = [...constantRouteConfig, ...dynamicRouteConfig];

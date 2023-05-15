import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { allRouteConfig, NotFoundPage } from "./routes";
import { RouteItemType } from "./types";

const redirectToLogin = <Navigate to="/login" replace />;

function generateRouteElement(routeItem: RouteItemType): React.ReactNode {
  const { needAuth, element: RouteComponent, permissions } = routeItem;
  const isLogin = true;
  // 需要验证token
  if (needAuth) {
    // 未登录，跳转登录页面
    if (!isLogin) {
      return redirectToLogin;
    } else {
      // 不需要权限，或者需要权限并且存在权限，直接返回
      if (!permissions || (permissions && permissions?.includes("1"))) {
        return <RouteComponent />;
      } else {
        return <NotFoundPage />;
      }
    }
  } else {
    // 需要验证token，直接返回
    return <RouteComponent />;
  }
}

function generateRoute(routes: RouteItemType[]): React.ReactNode[] {
  return routes.map((routeItem) => {
    const element = generateRouteElement(routeItem);
    const children = routeItem.children;
    return (
      <Route key={routeItem.path} path={routeItem.path} element={element}>
        {children && generateRoute(children)}
      </Route>
    );
  });
}

function RouteGroup() {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>loading...</span>}>
        <Routes>
          {generateRoute(allRouteConfig)}
          <Route key="default" path="" element={redirectToLogin} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RouteGroup;

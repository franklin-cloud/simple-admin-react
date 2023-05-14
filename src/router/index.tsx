import React, { Suspense, LazyExoticComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { allRouteConfig } from "./routes";
import { RouteconfigObject } from "./types";

function generateRouteElement(Element: LazyExoticComponent<() => JSX.Element>) {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Element />
    </Suspense>
  );
}

function generateRoute(routes: RouteconfigObject[]): React.ReactNode[] {
  return routes.map((routeItem) => {
    const element = generateRouteElement(routeItem.element);
    const children = routeItem.children;
    return (
      <Route key={routeItem.path} path={routeItem.defaultRoute ? "" : routeItem.path} element={element}>
        {children && generateRoute(children)}
      </Route>
    );
  });
}

function RouteGroup() {
  return (
    <BrowserRouter>
      <Routes>{generateRoute(allRouteConfig)}</Routes>
    </BrowserRouter>
  );
}

export default RouteGroup;

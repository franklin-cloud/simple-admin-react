import React from "react";
import RouteGroup from "./router/index";

function app() {
  return <div className="app-container">{RouteGroup()}</div>;
}

export default app;

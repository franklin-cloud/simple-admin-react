import React from "react";
import RouteGroup from "./router/index";
import { Provider as MobxProvider } from "mobx-react";
import stores from "./store";

function app() {
  return (
    <div className="app-container">
      <MobxProvider {...stores}>{RouteGroup()}</MobxProvider>
    </div>
  );
}

export default app;

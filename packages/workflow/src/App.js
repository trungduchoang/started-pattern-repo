// libs
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
// components import
import ErrorBoundary from "@/pages/ErrorBoundary";
import DashBoard from "@/components/DashBoard";
// routers
import { appRoutes } from "@/routers/appRoutes";
// others
import "antd/dist/antd.css";

const routeComponents = appRoutes.map(route => (
  <Route
    key={route.path || "/not-found"}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
));

const App = () => (
  <ConfigProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback="Application Loading">
          <DashBoard>
            <Switch>{routeComponents}</Switch>
          </DashBoard>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </ConfigProvider>
);

export default App;

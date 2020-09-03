// libs
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
// components import
import ProcessingLoader from "@/components/ProcessingLoader";
import ErrorBoundary from "@/pages/ErrorBoundary";
// routers
import { appRoutes } from "@/routers/appRoutes";
// others
import "antd/dist/antd.css";

// generate app routes
const routeComponents = appRoutes.map(route => (
  <Route
    key={route.path || "/appNotFound"}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
));

const App = () => (
  <ConfigProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<ProcessingLoader message="Suspense fallback" />}>
          <Switch>{routeComponents}</Switch>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </ConfigProvider>
);

export default App;

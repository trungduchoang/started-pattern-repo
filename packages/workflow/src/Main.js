// libs import
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// routers
import mainRoutes from "@/routers/mainRoutes";
// interceptors
import { doAxiosRequestIntercept } from "@/https/Interceptors";
// others
import { store } from "@/store";
import "./styles/main.scss";

// generate main route
const mainRouteComponents = mainRoutes.map(route =>
  route.path ? (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.render()}
    />
  ) : (
    <Route key="/mainNotFound" render={route.render()} />
  )
);

const Main = () => {
  doAxiosRequestIntercept();
  return (
    <Provider store={store}>
      <Switch>{mainRouteComponents}</Switch>
    </Provider>
  );
};

export default Main;

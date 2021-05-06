// libs import
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// routers
import mainRoutes from "@/routers/mainRoutes";
// others
import store from "@/store";
import "./styles/common.scss";

// generate main routes
const mainRouteComponents = () =>
  mainRoutes.map((route) =>
    route.path ? (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={route.render()}
      />
    ) : (
      <Route key="/mainNotFound" render={route.render()} />
    )
  );

const Main = () => (
  <Provider store={store}>
    <div className="main-wrapper">
      <Switch>{mainRouteComponents()}</Switch>
    </div>
  </Provider>
);

export default Main;

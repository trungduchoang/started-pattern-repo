// libs import
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// routers
import mainRoutes from "@/routers/mainRoutes";
// others
import { store } from "@/configs/Redux";
import "./styles/common.scss";

const Main = () => (
  <Provider store={store}>
    <div className="main-wrapper">
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  </Provider>
);

export default Main;

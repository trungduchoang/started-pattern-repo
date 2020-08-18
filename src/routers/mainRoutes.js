// components
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
// others
import CONSTANTS from "@/constants";

/**
 * define main pages routes
 */
const mainRoutes = [
  {
    path: CONSTANTS.ROUTERS.HOME,
    pageName: CONSTANTS.PAGE_NAME.HOME,
    exact: true,
    component: Home
  }
];

const generateMainRoutes = () =>
  mainRoutes.map(routeObj => ({
    path: routeObj.path,
    exact: routeObj.exact || false,
    roles: routeObj.roles || null,
    render: () => routeObj.component
  }));

export default [
  ...generateMainRoutes(),
  {
    render: () => NotFound
  }
];

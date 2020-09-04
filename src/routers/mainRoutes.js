// components
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Sample from "@/pages/Sample";
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
    component: Home,
  },

  {
    path: CONSTANTS.ROUTERS.SAMPLE,
    pageName: CONSTANTS.PAGE_NAME.SAMPLE,
    exact: true,
    component: Sample,
  },
];

const generateMainRoutes = mainRoutes.map((routeObj) => ({
  path: routeObj.path,
  exact: routeObj.exact || false,
  roles: routeObj.roles || null,
  render: () => routeObj.component,
}));

export default [
  ...generateMainRoutes,
  {
    render: () => NotFound,
  },
];

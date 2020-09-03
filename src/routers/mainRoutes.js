// components
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import MyRequest from "@/pages/AssignRequest";
import Sample from "@/pages/Sample";
import ViewRequest from "@/pages/ViewRequest";
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
  },
  {
    path: CONSTANTS.ROUTERS.ASSIGNREQUEST,
    pageName: CONSTANTS.PAGE_NAME.ASSIGNREQUEST,
    exact: true,
    component: MyRequest
  },
  {
    path: CONSTANTS.ROUTERS.SAMPLE,
    pageName: CONSTANTS.PAGE_NAME.SAMPLE,
    exact: true,
    component: Sample
  },
  {
    path: CONSTANTS.ROUTERS.VIEWREQUEST,
    pageName: CONSTANTS.PAGE_NAME.VIEWREQUEST,
    exact: true,
    component: ViewRequest
  }
];

const generateMainRoutes = mainRoutes.map(routeObj => ({
  path: routeObj.path,
  exact: routeObj.exact || false,
  roles: routeObj.roles || null,
  render: () => routeObj.component
}));

export default [
  ...generateMainRoutes,
  {
    render: () => NotFound
  }
];

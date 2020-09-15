// components
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import MyRequest from "@/pages/AssignRequest";
import ViewRequest from "@/pages/ViewRequest";
import ViewAssignRequest from "@/pages/ViewAssignRequest";
import StaffInfo from "@/pages/StaffInfo";
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
    path: CONSTANTS.ROUTERS.ASSIGN_REQUEST,
    pageName: CONSTANTS.PAGE_NAME.ASSIGN_REQUEST,
    exact: true,
    component: MyRequest
  },
  {
    // TODO: Có 2 tên là VIEW_REQUEST và VIEW_ASSIGN_REQUEST
    // -> k phân biệt được sự khác nhau -> Hãy đổi thành tên mà phân biệt được
    path: CONSTANTS.ROUTERS.VIEW_REQUEST,
    pageName: CONSTANTS.PAGE_NAME.VIEW_REQUEST,
    exact: true,
    component: ViewRequest
  },
  {
    path: CONSTANTS.ROUTERS.VIEW_ASSIGN_REQUEST,
    pageName: CONSTANTS.PAGE_NAME.VIEW_ASSIGN_REQUEST,
    exact: true,
    component: ViewAssignRequest
  },
  {
    path: CONSTANTS.ROUTERS.STAFF_INFO,
    pageName: CONSTANTS.PAGE_NAME.STAFF_INFO,
    exact: true,
    component: StaffInfo
  },
  {
    path: CONSTANTS.ROUTERS.BPMN_EDITOR,
    pageName: CONSTANTS.PAGE_NAME.BPMN_EDITOR,
    exact: true,
    component: StaffInfo
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

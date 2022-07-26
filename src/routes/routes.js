import Login from "../components/pages/Login";
import config from "../config";

//Public route
const publicRoutes = [
  { path: config.routes.home, component: Login },
  { path: config.routes.login, component: Login },
  { path: config.routes.tinTuc, component: Login },
  { path: config.routes.lienHe, component: Login },
  { path: config.routes.sanPham + "/:id", component: Login },
  // { path: config.routes.login, component: Login },
  // { path: config.routes.login, component: Login },
  // { path: config.routes.login, component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

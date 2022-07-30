import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import config from "../config";

//Public route
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  // { path: config.routes.tinTuc, component: Login },
  // { path: config.routes.lienHe, component: Login },
  // { path: config.routes.sanPham + "/:id", component: Login },
  { path: config.routes.signup, component: SignUp },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

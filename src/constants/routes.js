const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro",
  HOME: "/",
  ABOUT: "/about",
};

const privateRoutes = {
  HOME_FARM: "/home/finca",
  HOME_ROLE_COLLECTION_CENTER: "/home/acopio",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;

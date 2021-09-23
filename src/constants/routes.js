const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro",
  HOME: "/",
  ABOUT: "/about",
};

const privateRoutes = {
  HOME_ROLE_COLLECTION_CENTER: "/home/acopio",
  HOME_FARM: "/home/finca",
  DELIVERY: "entregas/entrega",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;

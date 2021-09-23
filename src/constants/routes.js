const publicRoutes = {
  LOGIN: "/sesion/login",
  REGISTER: "/registro",
  HOME: "/",
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

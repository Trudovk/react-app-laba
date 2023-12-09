import { useRoutes } from "react-router-dom";
import {
  ARTEM_ROUTE,
  POLYTECH_ROUTE,
  VLAD_ROUTE,
} from "../../app/routing/config";
import Artem from "../Artem";
import Vlad from "../Vlad";
import PolytechPagination from "../PolytechPagination";

const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE + "/:params", element: <Artem /> },
    { path: VLAD_ROUTE, element: <Vlad /> },
    { path: POLYTECH_ROUTE, element: <PolytechPagination /> },
    { path: "/", element: <div>Главная</div> },
    // { path: "*", element: <Navigate to={UNIVERSITIES_ROUTE} replace />},
  ]);
};

export default MainRouter;

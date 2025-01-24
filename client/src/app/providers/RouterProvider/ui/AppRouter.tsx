import { routesConfig } from "../../../config/RoutesConfig/routesConfig";

import { useRoutes } from "react-router-dom";

export const AppRouter = () => {
    const elementRoutes = useRoutes(routesConfig);

    return elementRoutes;

};


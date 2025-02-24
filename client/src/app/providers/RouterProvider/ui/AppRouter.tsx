
import { useRoutes } from "react-router-dom";
import { routesConfig } from "src/app/config/RoutesConfig/routesConfig";

export const AppRouter = () => {
    const elementRoutes = useRoutes(routesConfig);

    return elementRoutes;

};


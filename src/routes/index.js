import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import SecurityRoutes from "./AuthenticationRoutes";



const ThemeRoutes = () => {
    return useRoutes([MainRoutes]);
}

export default ThemeRoutes


import { lazy } from 'react';
import Loadable from "@/components/Loadable";
import MainLayout from "@/layout/MainLayout";


//User
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const Home = Loadable(lazy(() => import("../pages/Home/HomePage")));
const UserList = Loadable(lazy(() => import("../pages/User/UserList/UsersList")));
const UserCreation = Loadable(lazy(() => import("../pages/User/UserCreation/UserCreation")));
const UserEdition = Loadable(lazy(() => import("../pages/User/UserEdition/UserEdition")));

const MainRoutes = {
  path: "/admin",
  element: <MainLayout />,
  children: [
    {
        index: true,
        element: <Home />,
    },
    {
        path: 'dashboard',
        element: <Dashboard/>
    },

  ],
};

export default MainRoutes;

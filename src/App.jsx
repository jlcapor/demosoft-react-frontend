import { lazy } from "react";
import RoutesWithNotFound from "./components/RoutesWithNotFound";

//Session
import Loadable from "./components/Loadable";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import ThemeCustomization from "./themes";
import ScrollTop from "./components/ScrollTop";
import { Route } from "react-router-dom";
import AuthGuard from "@/auth/AuthGuard";

//Security
const Login = Loadable(lazy(() => import("./pages/Security/Login")));
const ForgotPassword = Loadable( lazy(() => import("./pages/Security/ForgotPassword")));
const NewPassword = Loadable(lazy(() => import("./pages/Security/NewPassword")));
const ConfirmAccount = Loadable(  lazy(() => import("./pages/Security/ConfirmAccount")));
const Unauthorize = Loadable(lazy(() => import("./components/Unauthorized")));

//User
const Dashboard = Loadable(lazy(() => import("./pages/Dashboard/Dashboard")));
const Home = Loadable(lazy(() => import("./pages/Home/HomePage")));
const UserList = Loadable(lazy(() => import("./pages/User/UserList/UsersList")));
const UserCreation = Loadable(lazy(() =>  import("./pages/User/UserCreation/UserCreation")));
const UserEdition = Loadable(lazy(() => import("./pages/User/UserEdition/UserEdition")));

//Roles

function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RoutesWithNotFound>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="olvido-password" element={<ForgotPassword />} />
            <Route path="olvido-password/:token" element={<NewPassword />} />
            <Route path="confirmar/:id" element={<ConfirmAccount />} />
          </Route>

          <Route path="/admin" element={<AuthGuard><MainLayout /></AuthGuard>}>
            <Route index element={<Home />} />
            <Route index element={<Dashboard />} />

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path="create-user" element={<UserCreation />} />
              <Route path=":userId" element={<UserEdition />} />
            </Route>
          </Route>

          <Route path="unauthorized" element={<Unauthorize />} />
        </RoutesWithNotFound>
      </ScrollTop>
    </ThemeCustomization>
  );
}

export default App;

import { lazy } from "react";
import Loadable from "@/components/Loadable";
import AuthLayout from "@/components/Layouts/AuthLayout";

//Security
const Login = Loadable(lazy(() => import("../pages/Security/Login")));
const ForgotPassword = Loadable(lazy(() => import("../pages/Security/ForgotPassword")));
const NewPassword = Loadable(lazy(() => import("../pages/Security/NewPassword")));
const ConfirmAccount = Loadable(lazy(() => import("../pages/Security/ConfirmAccount")));

const AuthenticationRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: "olvido-password",
      element: <ForgotPassword />,
    },

    {
      path: "olvido-password/:token",
      element: <NewPassword />,
    },

    {
      path: "confirmar/:id",
      element: <ConfirmAccount />,
    },
  ],
};

export default AuthenticationRoutes;

import ClienteAxios from "@/config/clienteAxios";

import authHeader from "./auth-header";

//Login iniciar sesion
const login = async (loginRequest) => {
  const response = await ClienteAxios.post(
    "/api/v1/auth/authenticate",
    loginRequest,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if (response.data.accessToken) {
    localStorage.setItem("userToken", JSON.stringify(response.data));
  }
  return response;
};

const getCurrentUser = async () => {
  const response = await ClienteAxios("/api/v1/users/me", {
    headers: authHeader(),
  });
  return response;
};

const logout = () => {
  localStorage.removeItem("userToken");
};

const authService = {
  login,
  getCurrentUser,
  logout,
};

export default authService;

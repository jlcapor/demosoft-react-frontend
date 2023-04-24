import { useEffect, createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import authService from "@/services/Auth.service";
import { useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const authenticationUser = async () => {
      try {
        const accessToken = localStorage.getItem("userToken");
        if (accessToken) {
          const { data } = await authService.getCurrentUser();
          setAuth(data);
        } else {
          setAuth({});
          setCargando(false);
        }
      } catch (error) {
        console.error(error)
        setAuth({});
      } finally {
        setCargando(false);
      }
    };
    authenticationUser();
  }, []);

  const logout = () => {
    setAuth({})
    authService.logout();
}

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;

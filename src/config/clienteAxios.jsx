import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

clienteAxios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);
export default clienteAxios;

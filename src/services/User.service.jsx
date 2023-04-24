import ClienteAxios from "@/config/clienteAxios";

const getUsers = async () => {
  const accessToken = JSON.parse(localStorage.getItem("userToken"));
  const response = await ClienteAxios.get("/api/v1/users/getUsers", {
    headers: { Authorization: `Bearer ${accessToken.accessToken}` },
  });
  return response;
};

const createUser = async (user) => {
  const accessToken = JSON.parse(localStorage.getItem("userToken"));
  const config = {
    headers: { Authorization: `Bearer ${accessToken.accessToken}` },
  };
  const response = await ClienteAxios.post("/api/v1/user/create", user, config);
  return response.data;
};

const updateUser = async (user) => {
  const accessToken = JSON.parse(localStorage.getItem("userToken"));
  const response = await ClienteAxios.put(`/api/v1/update/${user.id}`, user, {
    headers: { Authorization: `Bearer ${accessToken.accessToken}` },
  });
  return response;
};

const deleteUser = async (id) => {
  const accessToken = JSON.parse(localStorage.getItem("userToken"));
  const response = await ClienteAxios.post(`/api/v1/user/delete/${id}`, {
    headers: { Authorization: `Bearer ${accessToken.accessToken}` },
  });
  return response.data;
};

const userService = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;

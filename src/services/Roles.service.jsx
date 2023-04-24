import ClienteAxios from "@/config/clienteAxios";

const getAllRoles = async () => {
  const accessToken = JSON.parse(localStorage.getItem("userToken"));
  const response = await ClienteAxios.get("api/v1/roles", {
    Authorization: `Bearer ${accessToken.accessToken}`,
  });
  return response;
};
const RoleService = {
  getAllRoles,
};

export default RoleService;

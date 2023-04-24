export default function authHeader() {
  const userStr = localStorage.getItem("userToken");
  let user = null;
  if (userStr) {
    user = JSON.parse(userStr);
    if (user && user.accessToken) {
      return { Authorization: "Bearer " + user.accessToken }; // for Spring Boot back
    } else {
      return { Authorization: "" }; // for Spring Boot back-end
    }
  }
}

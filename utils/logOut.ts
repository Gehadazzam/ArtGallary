import apiClient from "~/utils/apiClient";

const logOut = async () => {
  try {
    await apiClient.post("/auth/logout");
    console.log("Logged out");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    console.log("Session Cleared");
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};
export default logOut;

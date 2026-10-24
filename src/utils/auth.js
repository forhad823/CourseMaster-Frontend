// Use "token" consistently everywhere
export const saveToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const clearToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_token"); // Cleanup old key
  localStorage.removeItem("dev_bypass"); // Cleanup bypass
};

import http from "@/netClient/config";

export async function doRegister(email,password) {
  try {
    const response = await http.post("/auth/reg", {
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function doLogin(email, password) {
  try {
    const response = await http.post("/auth/auth", {
      email,
      password,
    });
    const { accessToken } = response.data;
    localStorage.accessToken = accessToken;
    return accessToken;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function doLogout() {
  try {
    const response = await http.post(
      "/user/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.accessToken,
        },
      }
    );
    localStorage.removeItem("accessToken");
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}
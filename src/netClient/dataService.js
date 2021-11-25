import http from "@/netClient/config";

export async function doRegister(email,password, ) {
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
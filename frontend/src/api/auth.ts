import { api } from "./axios";

export const authApi = {
  register: (data: { username: string, password: string, email: string}) => {
    return api.post("/auth/register", data)
  }
}
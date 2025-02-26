import api from "./api";
export interface User {
  name: string;
  email: string;
  phone_number: string;
  emergency_phone_number: string;
  cpf: string;
  address: string;
}
export async function createNewUser(userData: User) {
  try {
    const response = await api.post("http://localhost:8080/users", userData);
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const response = await api.get("http://localhost:8080/users");
    return response.data;
  } catch (error) {
    throw error;
  }
}

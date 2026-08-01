import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const createUser = async (userData) => {
  const response = await API.post("/users", userData);
  return response.data;
};
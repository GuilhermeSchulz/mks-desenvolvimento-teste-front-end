import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/'
});



export const getAllItens = async () => {
  const response = await instance.get("products", { params: { page: 1, rows: 8, sortBy: "id", orderBy: "DESC" } })
  return response
}

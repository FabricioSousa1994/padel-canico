import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_PADEL_CANICO_API}`;

console.log(BASE_URL)

export const getAllCourts = () => {
   return axios.get(`${BASE_URL}/courts`);
}
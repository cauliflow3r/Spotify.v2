import axios from "axios";
import { API } from "../constants";

const confAxios = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access}`;

  const configuratedAxios = axios.create({
    baseURL: API,
    headers: { Authorization },
  });

  return configuratedAxios;
};

export default confAxios();

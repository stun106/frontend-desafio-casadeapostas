import axios from "axios";

const HOST = 'http://localhost:8080';
let isRedirecting = false;

export const ApiPrivado = axios.create({
  baseURL: `${HOST}/api/v1/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

ApiPrivado.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


ApiPrivado.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Erro na requisição:", error);
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);

      if ((error.response.status === 401 || error.response.status === 403) && !isRedirecting) {
        isRedirecting = true;
        localStorage.removeItem("token");
        localStorage.removeItem("usuarioLogado");
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);
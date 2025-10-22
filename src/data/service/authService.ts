import axios from "axios";
import type { Credencial, TokenJWT } from "../@types/AuthType";
import { ApiPublica } from "../providers/ApiPublica";

export const login = async (payload: Credencial) => {
  try {
    const response = await ApiPublica.post<TokenJWT>("/auth/login", payload);
    return response.data;
  } catch (error: unknown) {
    let mensagem = "Erro ao realizar login, verifique seus dados.";

    if (axios.isAxiosError(error)) {
      mensagem = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      mensagem = error.message;
    }

    throw new Error(mensagem);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuarioLogado")
  window.location.href = "/login";
}

export const useAuthService = {
  login,
  logout,
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthService } from "../service/authService";
import type { Credencial } from "../@types/AuthType";
import { toast } from "react-toastify";
import { useUsuarioService } from "../service/usuarioService";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credencial: Credencial) => {
      const response = await useAuthService.login(credencial);
      return response;
    },

    onSuccess: async (data) => {
      try {
        localStorage.setItem("token", data.token);

        const usuarioLogado = await useUsuarioService.usuarioLogado();

        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado.data));

        queryClient.setQueryData(["usuarioLogado"], usuarioLogado);
      } catch (error) {
        console.error("Erro ao buscar usuário logado:", error);
        toast.warn("Login realizado, mas não foi possível obter os dados do usuário.");
      }
    },
  });
};

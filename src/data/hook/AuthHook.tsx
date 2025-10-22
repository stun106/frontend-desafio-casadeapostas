import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthService } from "../service/authService";
import type { Credencial } from "../@types/AuthType";
import { toast } from "react-toastify";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credencial: Credencial) => {
      const response = await useAuthService.login(credencial);
      return response;
    },

    onSuccess: (data) => {
      toast.success("Login realizado com sucesso.");
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      localStorage.setItem("token", data.token);
    },

    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message || "Erro ao realizar login, verifiue seus dados.");
      } else {
        toast.error("Erro ao se comunicar com a api.");
      }
    },
  });
};

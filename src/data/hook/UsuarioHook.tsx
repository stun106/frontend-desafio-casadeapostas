import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Usuario } from "../@types/UsuarioType";
import { useUsuarioService } from "../service/usuarioService";
import { toast } from "react-toastify";

export const useSalvarUsuario = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (usuario: Usuario) => {
            const response = useUsuarioService.criarUsuario(usuario);
            return response;
        },

        onSuccess: () => {
            toast.success("Cadastro realizado com sucesso!");
            queryClient.invalidateQueries({ queryKey: ["usuarios"] });
        },

        onError: (error: unknown) => {
            if (error instanceof Error) {
                toast.error(error.message || "Erro ao salvar usuario, verifiue seus dados.");
            } else {
                toast.error("Erro ao se comunicar com a api.");
            }
        },
    });
};

export const useUsuarioLogado = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["usuarioLogado"],
        queryFn: useUsuarioService.usuarioLogado,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
    return { usuario: data, isLoading, error, refetch };
};
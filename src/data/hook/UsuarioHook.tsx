import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Usuario } from "../@types/UsuarioType";
import { useUsuarioService } from "../service/usuarioService";

export const useSalvarUsuario = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (usuario: Usuario) => {
            const response = useUsuarioService.criarUsuario(usuario);
            return response
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["usuarios"] });
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
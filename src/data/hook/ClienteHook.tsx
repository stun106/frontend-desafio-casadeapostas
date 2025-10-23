import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useClienteService } from "../service/clienteService";
import type { Cliente } from "../@types/ClienteType";

export const useSalvarCliente = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (cliente: Cliente) => {
            const response = useClienteService.criarCliente(cliente);
            return response
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clientes"] });
        },
    });
};

export const useListarCliente = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["clientes"],
        queryFn: useClienteService.listarClientes,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
    return { clientes: data, isLoading, error, refetch };
};


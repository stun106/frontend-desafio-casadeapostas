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


export const useBuscarCliPorId = (idCliente: string) => {
    const { data, isLoading, error, refetch } = useQuery<Cliente>({
        queryKey: ["clientesPorId", idCliente],
        queryFn: () => useClienteService.ExibirCliente(idCliente)
    });
    return { cliente: data, isLoading, error, refetch }
}

export const useDeletarTelefone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ idTelefone }: { idTelefone: string }) => {
            return await useClienteService.deleteTelefone(idTelefone)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clientes", "clientesPorId"] });
        }
    })
}
export const useDeletarEmail = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ idEmail }: { idEmail: string }) => {
            return await useClienteService.deleteEmail(idEmail)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clientes", "clientesPorId"] });
        }
    })
}
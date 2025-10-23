import { useQuery } from "@tanstack/react-query";
import { useClienteService } from "../service/cliente";

export const useListarCliente = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["clientes"],
        queryFn: useClienteService.listarClientes,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
    return { clientes: data, isLoading, error, refetch };
};
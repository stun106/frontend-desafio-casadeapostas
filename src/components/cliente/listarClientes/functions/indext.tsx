import { useEffect, useState } from "react";
import type { Cliente } from "../../../../data/@types/ClienteType";
import { useDeletarCliente, useListarCliente } from "../../../../data/hook/ClienteHook";
import { toast } from "react-toastify";

export function useTabelaClienteFunctions() {
    const { clientes, isLoading } = useListarCliente();
    const [resultados, setResultados] = useState<Cliente[]>(clientes || []);
    const [param, setParam] = useState("");
    const [isDelete, setDelete] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
    const { mutateAsync: deletarCliente } = useDeletarCliente();

    const removerAcentos = (texto: string) =>
        texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParam(e.target.value);
    };

    const buscarClientes = (termo: string): Cliente[] => {
        if (!termo.trim()) return clientes || [];

        const termoNormalizado = removerAcentos(termo.toLowerCase());

        return (clientes || []).filter(cliente => {
            const nomeNormalizado = removerAcentos(cliente.nomeCompleto.toLowerCase());
            return nomeNormalizado.includes(termoNormalizado)
        });
    };

    const abrirModalDeletar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, cliente: Cliente) => {
        e.stopPropagation();
        setClienteSelecionado(cliente);
        setDelete(true);
    };

    const handleDeletarCliente = async (idCliente: string) => {
        try {
            const response = await deletarCliente({ idCliente: idCliente });
            setDelete(false);
            console.log(response)
            toast.success("cliente removido com sucesso!")
        } catch (error) {
            toast.error((error as Error)?.message || "Erro ao realizar a exclusão, verifique seus dados.");
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setResultados(buscarClientes(param));
        }, 300);
        return () => clearTimeout(timeout);
    }, [param, clientes]);


    const qtdItems = clientes?.length;


    return {
        qtdItems,
        isDelete,
        isLoading,
        resultados,
        clienteSelecionado,
        handleDeletarCliente,
        abrirModalDeletar,
        handleChange,
        setDelete,
    }
}
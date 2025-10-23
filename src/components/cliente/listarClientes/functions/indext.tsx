import { useEffect, useState } from "react";
import type { Cliente } from "../../../../data/@types/ClienteType";
import { useListarCliente } from "../../../../data/hook/ClienteHook";

export function useTabelaClienteFunctions() {
    const { clientes, isLoading } = useListarCliente();
    const [resultados, setResultados] = useState<Cliente[]>(clientes || []);
    const [param, setParam] = useState("");
    const [isDelete, setDelete] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);

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
        e.stopPropagation(); // Evita que o clique no botão propague para o <tr>
        setClienteSelecionado(cliente);
        setDelete(true);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setResultados(buscarClientes(param));
        }, 300);
        return () => clearTimeout(timeout);
    }, [param, clientes]);

    // const handleDeletateUsuario = (idUsuario: number) => {
    //     try {
    //         if (idUsuario) {
    //             mutateDelete({ idUsuario: idUsuario });
    //             toast.success(`Usuário Deletado com sucesso!`);

    //             //reset de states
    //             setUsuarioSelecionado(null);
    //             setDelete(false);
    //         }
    //     } catch (error) {
    //         toast.error("Erro ao processar os dados, verifique seus dados ou entre em contato com o administrador.");
    //     }
    // }

    const qtdItems = clientes?.length;


    return {
        qtdItems,
        isDelete,
        isLoading,
        resultados,
        clienteSelecionado,
        abrirModalDeletar,
        handleChange,
        setDelete,
    }
}
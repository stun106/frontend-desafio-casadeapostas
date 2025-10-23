import axios from "axios";
import type { Cliente } from "../@types/ClienteType";
import { ApiPrivado } from "../providers/ApiPrivado";

const listarClientes = async () => {
    try {
        const response = await ApiPrivado.get<Cliente[]>("/cliente");
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao buscar dados da api.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            if (status === 404) {
                mensagem = "Nenhum cliente encontrado."
            }
            if (status === 500) {
                mensagem = "Erro interno do servidor. Tente novamente mais tarde.";
            } else {
                mensagem = error.response?.data?.message || mensagem;
            }
        } else if (error instanceof Error) {
            mensagem = error.message;
        }

        throw new Error(mensagem);

    }
}

const criarCliente = async (payload: Cliente) => {
    try {
        const response = await ApiPrivado.post<Cliente>("/cliente", payload);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao cadastrar cliente, verifique seus dados.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 409) {
                mensagem = "Cliente já cadastrado já Cadastrado";
            } else if (status === 500) {
                mensagem = "Erro interno do servidor. Tente novamente mais tarde.";
            } else {
                mensagem = error.response?.data?.message || mensagem;
            }
        } else if (error instanceof Error) {
            mensagem = error.message;
        }

        throw new Error(mensagem);
    }
}
export const useClienteService = {
    criarCliente,
    listarClientes
}
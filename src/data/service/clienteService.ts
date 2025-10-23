import axios from "axios";
import type { Cliente } from "../@types/ClienteType";
import { ApiPrivado } from "../providers/ApiPrivado";
import type { Usuario } from "../@types/UsuarioType";

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

const ExibirCliente = async (idCliente: string) => {
    try {
        const response = await ApiPrivado.get<Cliente>(`/cliente/${idCliente}`);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Usuario não encontrado, ou erro no servidor.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                mensagem = "Usuario não encontrado";
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

const EditarCliente = async (idCliente: string, payload: Cliente) => {
    try {
        const response = await ApiPrivado.put<Cliente>(`/cliente/${idCliente}`, payload);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao editar cliente, verifique seus dados.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                mensagem = "usuario não encontrado";
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

const deleteCliente = async (idCliente: string) => {
    try {
        const response = await ApiPrivado.delete<Cliente>(`/cliente/${idCliente}`);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao deletar o cliente";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                mensagem = "cliente nao encontrado";
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
const deleteTelefone = async (idTelefone: string) => {
    try {
        const response = await ApiPrivado.delete<Cliente>(`/cliente/excluirTelefone/${idTelefone}`);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao deletar o telefone, verifique seus dados.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                mensagem = "telefone não encontrado";
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
const deleteEmail = async (idEmail: string) => {
    try {
        const response = await ApiPrivado.delete<Cliente>(`/cliente/excluirEmail/${idEmail}`);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao deletar o email, verifique seus dados.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if (status === 404) {
                mensagem = "email não encontrado";
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
    deleteEmail,
    criarCliente,
    EditarCliente,
    deleteCliente,
    ExibirCliente,
    listarClientes,
    deleteTelefone,
}
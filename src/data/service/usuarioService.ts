import axios from "axios";
import type { Usuario, UsuarioResponse } from "../@types/UsuarioType"
import { ApiPublica } from "../providers/ApiPublica";
import { ApiPrivado } from "../providers/ApiPrivado";

const criarUsuario = async (payload: Usuario) => {
    try {
        const response = await ApiPublica.post<Usuario>("/usuario", payload);
        return response.data;
    } catch (error: unknown) {
        let mensagem = "Erro ao realizar login, verifique seus dados.";

        if (axios.isAxiosError(error)) {
            const status = error.response?.status;

            if ( status === 409) {
                mensagem = "Usuario já Cadastrado";
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

const usuarioLogado = () => ApiPrivado.get<UsuarioResponse>("/usuario/usuarioLogado");

export const useUsuarioService = {
    criarUsuario,
    usuarioLogado,
}
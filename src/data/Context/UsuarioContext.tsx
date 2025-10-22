import type React from "react";
import type { Usuario } from "../@types/UsuarioType";
import { createContext, useContext, useState, type ReactNode } from "react";

interface UsuarioContext {
    usuarioContext: Usuario
    setUsuarioContext: React.Dispatch<React.SetStateAction<Usuario>>;
    handleOnChangeUsuario: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const usuarioInitial: Usuario = {
    nome: "",
    email: "",
    cpf: "",
    senha: "",
}

const UsuarioContext = createContext<UsuarioContext | undefined>(undefined)

export const UsuarioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [usuarioContext, setUsuarioContext] = useState(usuarioInitial);

    const handleOnChangeUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuarioContext(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <UsuarioContext.Provider value={{
            usuarioContext,
            setUsuarioContext,
            handleOnChangeUsuario,
        }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export const useUsuarioContext = (): UsuarioContext => {
    const context = useContext(UsuarioContext);
    if (!context) throw new Error("Erro ao gerar o contexto");
    return context;

}
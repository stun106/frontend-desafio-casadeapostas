import { useEffect, useState } from "react";

interface Credencial {
    senha: string;
    confirmarSenha: string;
}

export function useUsuarioFunctions(credencial: Credencial) {
    const [isValidSenha, setValidSenha] = useState<boolean | null>(null);

    useEffect(() => {
        if (!credencial.senha || !credencial.confirmarSenha) {
            setValidSenha(null);
            return;
        }

        if (credencial.confirmarSenha.length < 6) {
            setValidSenha(false);
            return;
        }

        if (credencial.senha !== credencial.confirmarSenha) {
            setValidSenha(false);
            return;
        }

        setValidSenha(true);
    }, [credencial.senha, credencial.confirmarSenha]);

    return {
        isValidSenha,
    };
}

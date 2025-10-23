import { useState } from "react";
import type { Credencial } from "../../../data/@types/AuthType";
import { useLogin } from "../../../data/hook/AuthHook";
import { toast } from "react-toastify";

export function useAuthHomePage() {
    const [credencial, setCredencial] = useState<Credencial>({ email: '', senha: '' });
    const { mutateAsync: login, isPending: isLoading } = useLogin();

    const handleOnChangeCredencial = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredencial(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAutentificacao = async (e:React.FormEvent) => {
        e.preventDefault();
        console.log('handleAutentificacao: ', credencial);
        try {
            const response = await login(credencial);
            console.log(response)
            toast.success("Login realizado com sucesso!", {
                onClose: () => { window.location.replace("/clientes")}
            })
        } catch (error) {
             toast.error((error as Error)?.message || "Erro ao realizar o login, verifique seus dados.");
        }
    };
    

    console.log(credencial);
    return {
        isLoading,
        handleOnChangeCredencial,
        handleAutentificacao
    }
}
import { toast } from "react-toastify";
import { useClienteContext } from "../../../../data/Context/ClienteContext"
import { useDeletarCliente, useDeletarEmail, useDeletarTelefone, useEditarCliente  } from "../../../../data/hook/ClienteHook";
import { useEffect } from "react";


export function useEdicaoClienteFunction () {
    const { clienteContext } = useClienteContext();
    const { mutateAsync: atualizarCliente, isPending: isLoading} = useEditarCliente();
    const { mutateAsync: deletatarTelefone } = useDeletarTelefone();
    const { mutateAsync: deletarEmail} = useDeletarEmail();

        const handleEditarCliente = async (e:React.FormEvent) => {
            e.preventDefault();
            try {
                if (!clienteContext) return;
                console.log( clienteContext )
                const response = await atualizarCliente({idCliente: String(clienteContext.idCliente), cliente: clienteContext});
                console.log(response)
                toast.success("Cliente Atualizado com sucesso!", {
                    onClose: () => { window.location.replace(`/cliente/exibirCliente/${clienteContext.idCliente}`)}
                })
            } catch (error) {
                 toast.error((error as Error)?.message || "Erro ao realizar a edição, verifique seus dados.");
            }
        };


        const handleDeletarTelefone = async (idTelefone:string) => {
            try {
                if (!idTelefone) return;
                const response = await deletatarTelefone({idTelefone: String(idTelefone)});
                console.log(response)
                toast.success("Telefone removido com sucesso!")
            } catch (error) {
                 toast.error((error as Error)?.message || "Erro ao realizar a exclusão, verifique seus dados.");
            }
        };

        const handleDeletarEmail = async (idEmail:string) => {
            try {
                if (!idEmail) return;
                const response = await deletarEmail({idEmail: String(idEmail)});
                console.log(response)
                toast.success("Email removido com sucesso!")
            } catch (error) {
                 toast.error((error as Error)?.message || "Erro ao realizar a exclusão, verifique seus dados.");
            }
        };

        useEffect(() => {

        })


    return {
        isLoading,
        handleEditarCliente,
        handleDeletarTelefone,
        handleDeletarEmail
    }
} 
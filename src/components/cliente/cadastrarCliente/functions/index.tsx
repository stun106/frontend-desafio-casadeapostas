import { useClienteContext } from "../../../../data/Context/ClienteContext"
import { useSalvarCliente } from "../../../../data/hook/ClienteHook";
import { toast } from "react-toastify";

export function useCadastroClienteFunctions() {
    const { mutateAsync: salvarCliente, isPending: isLoading } = useSalvarCliente()
    const { clienteContext } = useClienteContext();

    const handleSalvarCliente = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            await salvarCliente(clienteContext);
            toast.success("Usuário salvo com sucesso!",{
                onClose: () => {
                    window.location.replace('/clientes')
                }
            })
        } catch (error) {
           toast.error((error as Error)?.message || "Erro ao salvar cliente.");
        }
    };
    return {
        isLoading,
        handleSalvarCliente,
    }
}
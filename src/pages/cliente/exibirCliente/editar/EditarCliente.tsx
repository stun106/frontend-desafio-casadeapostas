import EditarClienteComponent from "../../../../components/cliente/editarCliente/EditarClienteComponent";
import { ClienteProvider } from "../../../../data/Context/ClienteContext";

const EditarCliente: React.FC = () => {

    return (
        <ClienteProvider>
            <EditarClienteComponent />
        </ClienteProvider>
    )
}

export default EditarCliente;
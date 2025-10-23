import CadastrarClienteComponent from "../../../components/cliente/cadastrarCliente/CadastrarClienteComponent";
import { ClienteProvider } from "../../../data/Context/ClienteContext";

const CadastroCliente: React.FC = () => {
    return (
      <ClienteProvider>
        <CadastrarClienteComponent />
      </ClienteProvider>
    )
}

export default CadastroCliente;
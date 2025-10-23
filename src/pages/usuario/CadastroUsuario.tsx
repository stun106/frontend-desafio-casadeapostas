import CadastroUsuarioComponent from "../../components/usuario/CadastroUsuarioComponent";
import { UsuarioProvider } from "../../data/Context/UsuarioContext";

const CadastroUsuario: React.FC = () => (
  <UsuarioProvider>
    <CadastroUsuarioComponent />
  </UsuarioProvider>
);

export default CadastroUsuario;
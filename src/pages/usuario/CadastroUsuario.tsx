import CadastroUsuarioForm from "../../components/forms/usuario/CadastroUsuarioForm";
import { UsuarioProvider } from "../../data/Context/UsuarioContext";

const CadastroUsuario: React.FC = () => (
  <UsuarioProvider>
    <CadastroUsuarioForm />
  </UsuarioProvider>
);

export default CadastroUsuario;
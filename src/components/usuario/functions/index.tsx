import { useEffect, useState } from "react";
import { useSalvarUsuario } from "../../../data/hook/UsuarioHook";
import { useUsuarioContext } from "../../../data/Context/UsuarioContext";

interface FunctionProp {
  confirmarSenha: string
}

export function useUsuarioFunctions({ confirmarSenha }: FunctionProp) {
  const [isValidSenha, setValidSenha] = useState<boolean | null>(null);
  const { mutateAsync: salvarUsuario, isPending: isLoading } = useSalvarUsuario();
  const { usuarioContext } = useUsuarioContext();

  useEffect(() => {
    if (!usuarioContext.senha || !confirmarSenha) {
      setValidSenha(null);
      return;
    }

    if (confirmarSenha.length < 6) {
      setValidSenha(false);
      return;
    }

    if (usuarioContext.senha !== confirmarSenha) {
      setValidSenha(false);
      return;
    }

    setValidSenha(true);
  }, [usuarioContext.senha, confirmarSenha]);

  const handleSalvarUsuario = async () => {
    if (!isValidSenha) {
      throw new Error("As senhas não coincidem ou são inválidas.");
    }
    try {
      await salvarUsuario(usuarioContext);
      console.log("Usuário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      throw error;
    }
  };

  return {
    isValidSenha,
    isLoading,
    handleSalvarUsuario
  };
}

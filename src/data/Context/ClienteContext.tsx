import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Cliente } from "../@types/ClienteType";

type ClienteContextType = {
  clienteContext: Cliente;
  setClienteContext: React.Dispatch<React.SetStateAction<Cliente>>;
  handleOnChangeCliente: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const clienteInitial: Cliente = {
  nomeCompleto: "",
  contato: {
    telefones: [{ numero: "" }],
    emails: [{ email: "" }],
  },
};

const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const ClienteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clienteContext, setClienteContext] = useState<Cliente>(clienteInitial);

  const handleOnChangeCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "nomeCompleto") {
      setClienteContext(prev => ({
        ...prev,
        nomeCompleto: value,
      }));
      return;
    }

    if (name.startsWith("telefone")) {
      setClienteContext(prev => ({
        ...prev,
        contato: {
          ...prev.contato,
          telefones: [{ numero: value }],
          emails: [...prev.contato.emails],
        },
      }));
      return;
    }

    if (name.startsWith("email")) {
      setClienteContext(prev => ({
        ...prev,
        contato: {
          ...prev.contato,
          emails: [{ email: value }],
          telefones: [...prev.contato.telefones],
        },
      }));
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        clienteContext,
        setClienteContext,
        handleOnChangeCliente,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
};

export const useClienteContext = (): ClienteContextType => {
  const context = useContext(ClienteContext);
  if (!context) throw new Error("Erro ao gerar o ClienteContext");
  return context;
};

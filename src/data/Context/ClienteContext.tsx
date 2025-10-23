import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Cliente } from "../@types/ClienteType";

type ClienteContextType = {
  clienteContext: Cliente;
  setClienteContext: React.Dispatch<React.SetStateAction<Cliente>>;
  handleOnChangeCliente: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTelefone: () => void;
  removeTelefone: (index: number) => void;
  addEmail: () => void;
  removeEmail: (index: number) => void;
};

const clienteInitial: Cliente = {
  nomeCompleto: "",
  contato: {
    telefones: [],
    emails: [],
  },
};

const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const ClienteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clienteContext, setClienteContext] = useState<Cliente>(clienteInitial);

  const handleOnChangeCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "nomeCompleto") {
      setClienteContext(prev => ({ ...prev, nomeCompleto: value }));
      return;
    }

    if (name.startsWith("telefone")) {
      const index = parseInt(name.replace("telefone", "")) - 1;
      setClienteContext(prev => {
        const novosTelefones = [...prev.contato.telefones];
        novosTelefones[index].numero = value;
        return {
          ...prev,
          contato: { ...prev.contato, telefones: novosTelefones },
        };
      });
      return;
    }

    if (name.startsWith("email")) {
      const index = parseInt(name.replace("email", "")) - 1;
      setClienteContext(prev => {
        const novosEmails = [...prev.contato.emails];
        novosEmails[index].email = value;
        return {
          ...prev,
          contato: { ...prev.contato, emails: novosEmails },
        };
      });
    }
  };

const addTelefone = () => {
  setClienteContext(prev => ({
    ...prev,
    contato: {
      ...prev.contato,
      telefones: [
        ...prev.contato.telefones,
        { idTelefone: undefined, numero: "" },
      ],
    },
  }));
};


  const removeTelefone = (index: number) => {
    setClienteContext(prev => ({
      ...prev,
      contato: {
        ...prev.contato,
        telefones: prev.contato.telefones.filter((_, i) => i !== index),
      },
    }));
  };

  const addEmail = () => {
    setClienteContext(prev => ({
      ...prev,
      contato: {
        ...prev.contato,
        emails: [...prev.contato.emails, { email: "" }],
      },
    }));
  };

  const removeEmail = (index: number) => {
    setClienteContext(prev => ({
      ...prev,
      contato: {
        ...prev.contato,
        emails: prev.contato.emails.filter((_, i) => i !== index),
      },
    }));
  };

  return (
    <ClienteContext.Provider
      value={{
        clienteContext,
        setClienteContext,
        handleOnChangeCliente,
        addTelefone,
        removeTelefone,
        addEmail,
        removeEmail,
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

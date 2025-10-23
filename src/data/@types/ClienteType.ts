export type Cliente = {
  nomeCompleto: string;
  contato: Contato;
};

export type Telefone = {
  numero: string;
};

export type Email = {
  email: string;
};

export type Contato = {
  telefones: Telefone[];
  emails: Email[];
};

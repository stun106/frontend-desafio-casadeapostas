export type Cliente = {
  idCliente?:number;
  nomeCompleto: string;
  contato: Contato;
};

export type Telefone = {
  idTelefone?: number;
  numero: string;
};

export type Email = {
  idEmail?:number;
  email: string;
};

export type Contato = {
  idContato?: number;
  telefones: Telefone[];
  emails: Email[];
};

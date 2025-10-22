export type Usuario = {
    nome: string;
    cpf: string;
    email:string;
    senha:string;
}

export type UsuarioResponse = {
    idUsuario:string;
    nome:string;
    email:string;
    role:string;
}
import { useState } from "react";
import { useUsuarioContext } from "../../data/Context/UsuarioContext";
import { useUsuarioFunctions } from "./functions";
import { toast } from "react-toastify";

const CadastroUsuarioComponent: React.FC = () => {
    const { usuarioContext, handleOnChangeUsuario } = useUsuarioContext();
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const { isValidSenha, handleSalvarUsuario } = useUsuarioFunctions({ confirmarSenha: confirmaSenha });

    console.log(`Validação de senha:\n${isValidSenha === null ? 'Estado default' : isValidSenha ? 'Senha válida' : 'Senhas não coicidem'}`);

    console.log(usuarioContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await handleSalvarUsuario();
            toast.success("Usuario Cadastrado com sucesso!", {
                onClose: () => {
                    window.location.replace('/')
                }
            })
        } catch (error) {
            toast.error((error as Error)?.message || "Erro ao salvar usuário.");
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <div className="flex flex-col items-center mb-6">
                        {/* <img
                            src="/logo.svg" // substitua se tiver logo
                            alt="Casa de Apostas"
                            className="h-12 mb-4"
                        /> */}
                        <h1 className="text-2xl font-bold">Criar conta</h1>
                        <p className="text-gray-600 text-sm mt-2 text-center">
                            Preencha os dados abaixo para criar sua conta.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nome completo
                            </label>
                            <input
                                type="text"
                                name="nome"
                                value={usuarioContext.nome}
                                onChange={handleOnChangeUsuario}
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                placeholder="Digite seu nome completo"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                CPF
                            </label>
                            <input
                                type="text"
                                name="cpf"
                                value={usuarioContext.cpf}
                                onChange={handleOnChangeUsuario}
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                placeholder="Somente números"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={usuarioContext.email}
                                onChange={handleOnChangeUsuario}
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <input
                                type="password"
                                name="senha"
                                value={usuarioContext.senha}
                                onChange={handleOnChangeUsuario}
                                required
                                maxLength={6}
                                minLength={6}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                placeholder="Crie uma senha segura"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirmar Senha
                            </label>
                            <input
                                type="password"
                                name="senha"
                                onChange={(e) => setConfirmaSenha(e.target.value)}
                                required
                                maxLength={6}
                                minLength={6}
                                className={`w-full border border-gray-300 rounded-lg px-3 py-2   focus:outline-none ${isValidSenha === null ? ''
                                    : isValidSenha === false ? 'border-red-500'
                                        : 'focus:ring-2 focus:ring-emerald-500'}`}
                                placeholder="Crie uma senha segura"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition-colors"
                        >
                            Cadastrar
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-gray-500">
                            Já possui conta?{" "}
                            <a href="/" className="text-emerald-700 font-semibold hover:underline">
                                Fazer login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastroUsuarioComponent;
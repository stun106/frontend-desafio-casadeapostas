import { useAuthHomePage } from "./functions";

const LoginComponent: React.FC = () => {
    const { handleOnChangeCredencial, handleAutentificacao } = useAuthHomePage();
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <div className="flex flex-col items-center mb-6">
                        {/* logo */}
                        <h1 className="text-2xl font-bold">Acessar conta</h1>
                    </div>

                    <p className="text-center text-gray-600 text-sm mb-6">
                        Desafio Full Stack Casa de Apostas.
                    </p>

                    <form onSubmit={handleAutentificacao} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                onChange={handleOnChangeCredencial}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="senha"
                                    required
                                    onChange={handleOnChangeCredencial}
                                    minLength={6}
                                    maxLength={6}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                    placeholder="Digite sua senha de 6 digitos"
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-emerald-700 text-sm hover:underline">
                                Esqueceu sua senha?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition-colors"
                        >
                            Acessar conta
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <p className="text-gray-500">
                            Novo usuário?{" "}
                            <a href="/usuario" className="text-emerald-700 font-semibold hover:underline">
                                Criar uma conta
                            </a>
                        </p>
                    </div>

                    <div className="mt-6 text-center text-xs text-gray-500 border-t pt-4">
                        Precisa de ajuda?{" "}
                        <a href="#" className="text-emerald-700 font-medium hover:underline">
                            suporte 24h
                        </a>
                    </div>

                    <div className="mt-4 text-center text-xs text-emerald-700 space-x-2">
                        <a href="#" className="hover:underline">Casa de Apostas</a> |
                        <a href="#" className="hover:underline">Ao Vivo</a> |
                        <a href="#" className="hover:underline">Cassino</a> |
                        <a href="#" className="hover:underline">Promoções</a> |
                        <a href="#" className="hover:underline">App</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;
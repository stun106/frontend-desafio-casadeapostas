const Home: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <div className="flex flex-col items-center mb-6">
                        {/* <img
                            src="/logo.svg" 
                            alt="Casa de Apostas"
                            className="h-12 mb-4"
                        /> */}
                        <h1 className="text-2xl font-bold">Acessar conta</h1>
                    </div>

                    <p className="text-center text-gray-600 text-sm mb-6">
                        Por favor, utilize suas informações de login e senha da Casa de Apostas para se conectar.
                    </p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail / Nome de usuário / CPF
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                placeholder="Digite seu e-mail, usuário ou CPF"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                    placeholder="Digite sua senha"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">
                                    👁️
                                </span>
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

export default Home;
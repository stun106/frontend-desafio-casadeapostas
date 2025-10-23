const Header: React.FC = () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
    return (
        <>
            <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex flex-col">
                <div className="flex items-center justify-between w-full">
                    <div className="flex">
                        <h1 className="text-xl font-semibold">Gerenciamento de Clientes</h1>
                    </div>

                    <div className="flex gap-2 items-end text-gray-700">
                        <span className="text-sm font-bold text-gray-500">
                            {usuario?.email ? usuario.email : "Usuário não identificado"}
                        </span>
                        <button
                            //onClick={handleLogout}
                            className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-2  py-1 text-xs  rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                        <div className="flex">

                        </div>
                    </div>

                </div>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                            + Adicionar
                        </button>
                        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                            Extrair Relatório
                        </button>
                    </div>
                    <div className="w-[600px]">
                        <input
                            type="text"
                            placeholder="Pesquisar cliente..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>
                    <p>
                        <span className="font-semibold text-emerald-600">25</span> clientes cadastrados
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header;
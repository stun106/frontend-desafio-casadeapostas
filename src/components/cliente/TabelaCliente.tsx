const TabelaCliente: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-start py-10 px-4 bg-[#0b1120] min-h-[calc(100vh-120px)]">
                <div className="w-full max-w-6xl bg-[#111827] shadow-xl rounded-2xl overflow-hidden border border-emerald-700">
                    <table className="w-full text-left text-gray-200 border-collapse">
                        <thead className="bg-emerald-700 text-gray-100 uppercase text-sm">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Nome</th>
                                <th className="px-6 py-4 font-semibold">Email</th>
                                <th className="px-6 py-4 font-semibold">Telefone</th>
                                <th className="px-6 py-4 font-semibold text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {/* Linhas simuladas */}
                            <tr className="hover:bg-gray-800/60 transition-colors">
                                <td className="px-6 py-4">João da Silva</td>
                                <td className="px-6 py-4">joao@email.com</td>
                                <td className="px-6 py-4">(11) 99999-0000</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-medium transition">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                            {/* <tr>...</tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};
export default TabelaCliente;
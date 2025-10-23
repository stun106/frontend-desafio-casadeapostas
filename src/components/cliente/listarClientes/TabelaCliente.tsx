import Header from "../../Header";
import React from "react";
import { useTabelaClienteFunctions } from "./functions/indext";
import Loading from "../../Loading";
import { ConfirmaAcao } from "../../ConfirmaAcao";

const TabelaCliente: React.FC = () => {
    const {
        qtdItems,
        isDelete,
        isLoading,
        resultados,
        clienteSelecionado,
        abrirModalDeletar,
        handleChange,
        setDelete,
    } = useTabelaClienteFunctions();

    return (
        <>
            <Header>
                {/* Cabeçalho dinâmico da página */}
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">
                        Gerenciamento de Clientes
                    </h1>

                    <div className="flex gap-2">
                        <button
                            onClick={() => window.location.replace("/cliente/cadastro")}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                            + Adicionar
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                            Extrair Relatório
                        </button>
                    </div>
                </div>

                {/* Filtros e contagem */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <input
                        type="text"
                        placeholder="Pesquisar cliente..."
                        className="w-[600px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        onChange={handleChange}
                    />
                    <p>
                        <span className="font-semibold text-emerald-600">{qtdItems}</span> clientes cadastrados
                    </p>
                </div>
            </Header>

            {/* Corpo principal */}
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <main className="flex justify-center items-start py-10 px-4 bg-[#0b1120] min-h-[calc(90vh-100px)]">
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
                                    {
                                        resultados && resultados.length > 0 ? (
                                            resultados.map((item, index) => (
                                                <>
                                                    <tr
                                                        className="hover:bg-gray-800/60 transition-colors cursor-pointer"
                                                        onClick={() => window.location.replace(`/cliente/exibirCliente/${item.idCliente}`)}
                                                        key={index}
                                                         >
                                                        <td className="px-6 py-4">
                                                            {item.nomeCompleto}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.contato.emails.length > 0 ? item.contato.emails.at(0)?.email : 'N/A'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {item.contato.telefones.length > 0 ? item.contato.telefones.at(0)?.numero : 'N/A'}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex justify-end gap-2">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        abrirModalDeletar(e, item);
                                                                    }}
                                                                    className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-sm font-medium transition">
                                                                    excluir
                                                                </button>
                                                                <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-medium transition">
                                                                    Editar
                                                                </button>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        ) : (
                                            null
                                        )
                                    }
                                </tbody>
                            </table>
                            {
                                isDelete && (
                                    <ConfirmaAcao
                                        titulo={"Confirmar Deletar"}
                                        descricao={`Tem certeza que deseja deletar o cliente`}
                                        predicado={clienteSelecionado?.nomeCompleto.toUpperCase()}
                                        acao={() => handleDeletateCliente(Number(clienteSelecionado?.idUsuario))}
                                        onClose={() => setDelete(false)} />
                                )
                            }
                        </div>
                    </main>
                )
            }

        </>
    );
};

export default TabelaCliente;

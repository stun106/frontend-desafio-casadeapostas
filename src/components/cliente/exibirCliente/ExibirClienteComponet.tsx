import { useParams } from "react-router-dom"
import { useBuscarCliPorId } from "../../../data/hook/ClienteHook"
import Header from "../../Header"
import Loading from "../../Loading"

const ExibirClienteComponent: React.FC = () => {
  const { idCliente } = useParams<{ idCliente: string }>();
  const { cliente, isLoading } = useBuscarCliPorId(idCliente as string); 
    return (
        <>
            <Header>
                <h1 className="text-xl font-semibold text-gray-800">Cadastro de Cliente</h1>
            </Header>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <main className="flex justify-center items-start py-10 px-4 bg-[#0b1120] min-h-[calc(100vh-120px)]">
                        <div
                            className="w-full max-w-2xl bg-[#111827] shadow-xl rounded-2xl border border-emerald-700 p-8 text-gray-200 space-y-6"
                        >
                            <div>
                                <label htmlFor="nomeCompleto" className="block text-sm font-medium mb-1">
                                    Nome Completo
                                </label>
                                <input
                                    id="nomeCompleto"
                                    name="nomeCompleto"
                                    type="text"
                                    disabled
                                    value={cliente?.nomeCompleto}
                                    placeholder="Digite o nome completo do cliente"
                                    className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Telefones</label>
                                {cliente?.contato.telefones.map((telefone, i) => (
                                    <div key={i} className="flex gap-2 mb-2">
                                        <input
                                            name={`telefone${i + 1}`}
                                            type="tel"
                                            disabled
                                            pattern="[0-9]{10,11}"
                                            title="Digite um número de telefone válido (somente números)"
                                            value={telefone.numero}
                                            placeholder="Ex: 71999999999"
                                            className="flex-1 rounded-lg border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                        />
                                    </div>
                                ))}

                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">E-mails</label>
                                {cliente?.contato.emails.map((email, i) => (
                                    <div key={i} className="flex gap-2 mb-2">
                                        <input
                                            name={`email${i + 1}`}
                                            type="email"
                                            disabled
                                            value={email.email}
                                            placeholder="exemplo@email.com"
                                            className="flex-1 rounded-lg border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                        />

                                    </div>
                                ))}

                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white"
                                    onClick={() => window.location.replace("/clientes")}
                                >
                                    Voltar
                                </button>


                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium"
                                    onClick={() => window.location.replace(`/cliente/exibirCliente/editar/${cliente?.idCliente}`)}
                                >
                                    Editar
                                </button>
                            </div>
                        </div>
                    </main>
                </>
            )
            }
        </>
    )
}

export default ExibirClienteComponent;
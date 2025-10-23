import { useParams } from "react-router-dom";
import { useClienteContext } from "../../../data/Context/ClienteContext";
import { useBuscarCliPorId } from "../../../data/hook/ClienteHook";
import Header from "../../Header";
import Loading from "../../Loading";
import { useEdicaoClienteFunction } from "./functions";
import { useEffect } from "react";

const EditarClienteComponent: React.FC = () => {
    const { clienteContext, handleOnChangeCliente, setClienteContext, addTelefone, addEmail, removeEmail, removeTelefone } = useClienteContext();
    const { isLoading, handleEditarCliente, handleDeletarEmail, handleDeletarTelefone } = useEdicaoClienteFunction();
    const { idCliente } = useParams<{ idCliente: string }>();
    const { cliente, isLoading:isLoadingCliente } = useBuscarCliPorId(idCliente as string);


    useEffect(() => {
        if (!cliente) return;
        setClienteContext(cliente);
    },[cliente]);

    const handleRemoverTelefone = (index: number, idTelefone?: number) => {
        if (idTelefone) {
            handleDeletarTelefone(String(idTelefone));
        } else {

            removeTelefone(index);
        }
    };

    const handleRemoverEmail = (index: number, idEmail?: number) => {
        if (idEmail) {
            handleDeletarEmail(String(idEmail));
        } else {
            removeEmail(index);
        }
    };

    return (
        <>
            <Header>
                <h1 className="text-xl font-semibold text-gray-800">
                    Editar Cliente
                </h1>
            </Header>

            {isLoading || isLoadingCliente? (
                <Loading />
            ) : (
                <main className="flex justify-center items-start py-10 px-4 bg-[#0b1120] min-h-[calc(100vh-120px)]">
                    <form
                        onSubmit={handleEditarCliente}
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
                                required
                                minLength={3}
                                value={clienteContext.nomeCompleto}
                                onChange={handleOnChangeCliente}
                                placeholder="Digite o nome completo do cliente"
                                className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                            />
                        </div>

                        {/* Telefones */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Telefones</label>
                            {clienteContext.contato.telefones.map((telefone, i) => (
                                <div key={telefone.idTelefone} className="flex gap-2 mb-2">
                                    <input
                                        name={`telefone${i + 1}`}
                                        type="tel"
                                        required
                                        pattern="[0-9]{10,11}"
                                        title="Digite um número de telefone válido (somente números)"
                                        value={telefone.numero}
                                        onChange={handleOnChangeCliente}
                                        placeholder="Ex: 71999999999"
                                        className="flex-1 rounded-lg border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                    />
                                    {clienteContext.contato.telefones.length > 0 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoverTelefone(i, telefone.idTelefone)
                                            }
                                            className="px-3 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white"
                                        >
                                            🗑️
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addTelefone}
                                className="text-sm text-emerald-400 hover:text-emerald-300 transition mt-1"
                            >
                                + Adicionar telefone
                            </button>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">E-mails</label>
                            {clienteContext.contato.emails.map((email, i) => (
                                <div key={email.idEmail} className="flex gap-2 mb-2">
                                    <input
                                        name={`email${i + 1}`}
                                        type="email"
                                        required={i === 0}
                                        value={email.email}
                                        onChange={handleOnChangeCliente}
                                        placeholder="exemplo@email.com"
                                        className="flex-1 rounded-lg border border-gray-600 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                    />
                                    {clienteContext.contato.emails.length > 0 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoverEmail(i, email.idEmail)
                                            }
                                            className="px-3 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white"
                                        >
                                            🗑️
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addEmail}
                                className="text-sm text-emerald-400 hover:text-emerald-300 transition mt-1"
                            >
                                + Adicionar e-mail
                            </button>
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={() => window.location.replace("/clientes")}
                                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white"
                            >
                                Voltar
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setClienteContext({
                                        nomeCompleto: "",
                                        contato: {
                                            telefones: [{ numero: "" }],
                                            emails: [{ email: "" }],
                                        },
                                    })
                                }
                                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-white"
                            >
                                Limpar
                            </button>

                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium"
                            >
                                Salvar Alterações
                            </button>
                        </div>
                    </form>
                </main>
            )}
        </>
    );
}

export default EditarClienteComponent;
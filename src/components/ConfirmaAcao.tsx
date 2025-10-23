interface ConfirmaAcaoProps {
    titulo: string;
    descricao?: string;
    predicado?: string;
    onClose: (param: boolean) => void
    acao: (...args: any[]) => void | Promise<void>;
}

export const ConfirmaAcao: React.FC<ConfirmaAcaoProps> = ({ titulo, descricao, predicado, onClose, acao }) => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold">{titulo}</h2>
                    <p className="mt-2">
                        {descricao}{" "}
                        <strong>{predicado?.toUpperCase()}</strong>?
                    </p>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={() => onClose(false)}
                            className="border border-red-500 hover:bg-red-500 hover:text-white text-red-500 px-4 py-2 rounded-md"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={async() => { if (acao) await acao() }}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
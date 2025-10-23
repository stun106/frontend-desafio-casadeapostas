import React from "react";

type HeaderProps = {
    children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usuarioLogado')
        window.location.replace("/")
    }
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex flex-col gap-4">
            {/* Barra superior fixa */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-sm font-bold text-gray-500">
                        {usuario?.email || "Usuário não identificado"}
                    </span>

                    <button
                        className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-2 py-1 text-xs rounded-lg transition-colors"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Conteúdo injetado */}
            <div className="flex flex-col gap-4">{children}</div>
        </header>
    );
};

export default Header;

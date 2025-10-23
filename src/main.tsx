import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import CadastroUsuario from "./pages/usuario/CadastroUsuario.tsx";
import Login from "./pages/Login.tsx";
import Clientes from "./pages/cliente/Clientes.tsx";
import CadastroCliente from "./pages/cliente/cadastro/CadastroCliente.tsx";
import ExibirCliente from "./pages/cliente/exibirCliente/ExibirCliente.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      {path: "/usuario", element: <CadastroUsuario />},
      { path: "/clientes", element: <Clientes /> },
      { path: "/cliente/cadastro", element: <CadastroCliente />},
      { path: "/cliente/exibirCliente/:idCliente", element: <ExibirCliente />}
    ],
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

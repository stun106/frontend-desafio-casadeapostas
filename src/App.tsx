import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

export default function App() {
  const location = useLocation();

  // define quais rotas devem exibir o header
  const mostrarHeader = location.pathname.startsWith("/clientes");
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme="colored"
      />
      <div className="flex flex-col min-h-screen">
        {
          mostrarHeader &&  <Header />
        }
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

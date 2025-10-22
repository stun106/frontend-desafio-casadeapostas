import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme="colored"
      />
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-1 bg-slate-900 text-slate-100 p-6">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

import { Navigation } from "./routes/Navigation";
import { AuthProvider } from "./auth/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ModalProvider } from "./shared/context/ModalContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <Navigation />
          <ToastContainer
            position="bottom-right"
            autoClose={2700}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ fontSize: "14px" }}
          />
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;

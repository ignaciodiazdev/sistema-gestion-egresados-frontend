import { Navigation } from "./routes/Navigation";
import { AuthProvider } from "./auth/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;

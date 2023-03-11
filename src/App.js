import React from "react";
import { ToastContainer } from "react-toastify";
import { Navigation } from "./routes";
import { AuthProvider } from "./context";
export const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  );
};

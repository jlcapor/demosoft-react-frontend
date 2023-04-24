import React from "react";
import ReactDOM from "react-dom/client";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthProvider";

import "simplebar-react/dist/simplebar.min.css";
import { BrowserRouter } from "react-router-dom";

// toaster options
const toasterOptions = {
  style: {
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster toastOptions={toasterOptions} />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

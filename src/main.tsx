import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';

// əlavə et
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* BURADA əlavə et */}
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </I18nextProvider>  {/* BURADA əlavə et */}
  </React.StrictMode>
);

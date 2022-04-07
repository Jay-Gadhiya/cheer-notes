import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/authentication-context";
import { NotesProvider } from "./Contexts/notesActions-context";
import { ShowMenuProvider } from "./Contexts/showMenuContext";
import { ThemeProvider } from "./Contexts/themeContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <ShowMenuProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ShowMenuProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

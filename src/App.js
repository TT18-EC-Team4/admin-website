import React from "react";

import AdminPage from "./pages/AdminPage";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { DataProvider } from "./GlobalState";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({});

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AdminPage />
        </ThemeProvider>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

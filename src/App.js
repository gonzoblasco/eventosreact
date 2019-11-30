import React from "react";
import CategoriasProvider from "./context/CategoriasContext";

import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <CategoriasProvider>
      <Header />

      <div className="uk-container">
        <Formulario />
      </div>
    </CategoriasProvider>
  );
}

export default App;

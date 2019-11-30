import React from "react";
import CategoriasProvider from "./context/CategoriasContext";
import EventosProvider from "./context/EventosContext";

import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />

        <div className="uk-container">
          <Formulario />
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;

import React from "react";
import { EventosConsumer } from "../context/EventosContext";
import Evento from "./Evento";

const ListaEventos = () => (
  <div className="uk-child-with-1-3@m" uk-grid="true">
    <EventosConsumer>
      { value => {
        return value.eventos.map(() => (
          <Evento />
        ));
      } }
    </EventosConsumer>
  </div>
);

export default ListaEventos;
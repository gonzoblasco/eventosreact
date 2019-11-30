import React, { Component } from "react";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  ordenar = "date";
  token = "MCVNWFSXUGRSJWQFDL2M";
  state = {};

  getEvents = async (busqueda) => {
    const url = `https://www.eventbriteapi.com/v3/events/search/q=${ busqueda.nombre }&categories=${ busqueda.categoria }&sort_by=${ this.ordenar }&token=${ this.token }&locale=es_ES`;
  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default EventosProvider;

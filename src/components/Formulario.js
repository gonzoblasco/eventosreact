import React, { Component } from "react";
import { CategoriasConsumer } from "../context/CategoriasContext";

class Formulario extends Component {
  state = {
    categoria: "",
    nombre: ""
  };

  getEventData = e => {
    this.setState({
      [ e.target.name ]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por Nombre o Categoría
          </legend>
        </fieldset>

        <div className="uk-column-1-3@m uk-mmargin">
          <div className="uk-margin" uk-margin="true">
            <input
              className="uk-input"
              name="nombre"
              onChange={ this.getEventData }
              placeholder="Nombre de Evento o Ciudad"
              type="text"
            />

            <div className="uk-margin" uk-margin="true">
              <select
                className="uk-select"
                name="categoria"
                onChange={ this.getEventData }
              >
                <option value="">--Selecciona Categoría--</option>
                <CategoriasConsumer>
                  { value => {
                    return ( value.categorias.map(categoria => (
                      <option
                        key={ categoria.id }
                        value={ categoria.id }
                        data-uk-form-select>
                        { categoria.name_localized }
                      </option>
                    )) );
                  } }
                </CategoriasConsumer>
              </select>
            </div>

            <div>
              <input
                className="uk-button uk-button-danger"
                type="submit"
                value="Buscar Evento" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;

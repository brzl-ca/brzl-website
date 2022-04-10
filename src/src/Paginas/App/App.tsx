import React from "react";
import "./App.css";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";

const App = () => (
  <div className="App">
    <Cabecalho />
    <ContainerCentral />
    <Rodape />
  </div>
);

export { App };

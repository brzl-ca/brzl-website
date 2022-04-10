import React from "react";
import "./App.css";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";
import { Outlet, useOutlet } from "react-router-dom";

const App = () => {
  const el = useOutlet();
  return (
    <div className="App">
      <Cabecalho />
      <ContainerCentral>
        {el ? <Outlet /> : <p>Página inicial</p>}
      </ContainerCentral>
      <Rodape />
    </div>
  );
};

export { App };

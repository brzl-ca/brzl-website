import React from "react";
import "./App.css";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";
import { Outlet, useOutlet } from "react-router-dom";

const App = () => {
  const isNotTheBaseRoute = useOutlet();
  return (
    <div className="App">
      <Cabecalho />
      <ContainerCentral>
        {isNotTheBaseRoute ? (
          <Outlet />
        ) : (
          <img
            className={"image"}
            width={1024}
            height={682}
            src={"https://carolbrazil.github.io/brasileiros/brasileiros.jpg"}
            alt={"imagem"}
          />
        )}
      </ContainerCentral>
      <Rodape />
    </div>
  );
};

export { App };

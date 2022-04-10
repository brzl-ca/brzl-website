import React from "react";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";

const Login = () => (
  <div className="App">
    <Cabecalho />
    <ContainerCentral>
      <h1>Login</h1>
    </ContainerCentral>
    <Rodape />
  </div>
);

export { Login };

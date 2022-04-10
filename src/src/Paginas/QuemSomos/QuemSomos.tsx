import React from "react";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";

const QuemSomos = () => (
  <div className="App">
    <Cabecalho />
    <ContainerCentral>
      <h1>QuemSomos</h1>
    </ContainerCentral>
    <Rodape />
  </div>
);

export { QuemSomos };

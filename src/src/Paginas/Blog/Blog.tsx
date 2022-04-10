import React from "react";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";

const Blog = () => (
  <div className="App">
    <Cabecalho />
    <ContainerCentral>
      <h1>Blog</h1>
    </ContainerCentral>
    <Rodape />
  </div>
);

export { Blog };

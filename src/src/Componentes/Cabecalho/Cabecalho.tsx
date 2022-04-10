import React from "react";
import "./Cabecalho.css";
import { LinksNavegacao } from "../LinksNavegacao/LinksNavegacao";
import { Link } from "react-router-dom";
import ROUTES from "../../Paginas/routes";
import { isDev } from "../../Paginas/devUtils";

const Cabecalho = () => (
  <section className={isDev() ? "Cabecalho" : ""}>
    {isDev() && <h2>Cabecalho</h2>}
    <LinksNavegacao>
      <Link to={ROUTES.PAGINA_INITIAL}>🏠</Link>
      <Link to={ROUTES.LOJA}>Loja</Link>
      <Link to={ROUTES.AGENDA}>Agenda de eventos</Link>
      <Link to={ROUTES.CATALOGO}>Catálogo de serviços</Link>
      <Link to={ROUTES.LOGIN}>Entrar</Link>
    </LinksNavegacao>
  </section>
);

export { Cabecalho };

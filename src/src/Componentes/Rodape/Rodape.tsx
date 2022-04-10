import React from "react";
import "./Rodape.css";
import { Link } from "react-router-dom";
import { LinksNavegacao } from "../LinksNavegacao/LinksNavegacao";
import ROUTES from "../../Paginas/routes";
import { isDev } from "../../Paginas/devUtils";

const Rodape = () => (
  <section className={isDev() ? "Rodape" : ""}>
    {isDev() && <h2>Rodape</h2>}
    <LinksNavegacao>
      <Link to={ROUTES.PAGINA_INITIAL}>🏠</Link>
      <Link to={ROUTES.CONTATO}>Contato</Link>
      <Link to={ROUTES.QUEM}>Quem somos</Link>
      <Link to={ROUTES.BLOG}>Blog</Link>
    </LinksNavegacao>
  </section>
);

export { Rodape };

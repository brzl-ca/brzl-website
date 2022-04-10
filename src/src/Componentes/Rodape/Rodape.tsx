import React from "react";
import "./Rodape.css";
import { Link, useLocation } from "react-router-dom";
import { LinksNavegacao } from "../LinksNavegacao/LinksNavegacao";
import ROUTES from "../../Paginas/routes";
import { isDev } from "../../Paginas/devUtils";

const Rodape = () => {
  const { pathname } = useLocation();
  return (
    <section className={isDev() ? "Rodape" : ""}>
      {/*{isDev() && <h2>Rodape</h2>}*/}
      <LinksNavegacao>
        <Link
          to={ROUTES.PAGINA_INITIAL}
          className={pathname === ROUTES.PAGINA_INITIAL ? "pagina-atual" : ""}
        >
          🏠 Página inicial
        </Link>
        <Link
          to={ROUTES.CONTATO}
          className={pathname === ROUTES.CONTATO ? "pagina-atual" : ""}
        >
          Contato
        </Link>
        <Link
          to={ROUTES.QUEM}
          className={pathname === ROUTES.QUEM ? "pagina-atual" : ""}
        >
          Quem somos
        </Link>
        <Link
          to={ROUTES.BLOG}
          className={pathname === ROUTES.BLOG ? "pagina-atual" : ""}
        >
          Blog
        </Link>
      </LinksNavegacao>
    </section>
  );
};

export { Rodape };

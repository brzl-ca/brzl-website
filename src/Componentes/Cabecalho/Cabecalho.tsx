import React from "react";
import "./Cabecalho.css";
import { LinksNavegacao } from "../LinksNavegacao/LinksNavegacao";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../Paginas/routes";

const Cabecalho = () => {
  const { pathname } = useLocation();

  return (
    <section className={"Cabecalho"}>
      {/*{isDev() && <h2>Cabecalho</h2>}*/}
      <LinksNavegacao>
        <Link
          to={ROUTES.PAGINA_INITIAL}
          className={pathname === ROUTES.PAGINA_INITIAL ? "pagina-atual" : ""}
        >
          🏠 Página inicial
        </Link>
        <Link
          to={ROUTES.LOJA}
          className={pathname === ROUTES.LOJA ? "pagina-atual" : ""}
        >
          Loja
        </Link>
        <Link
          to={ROUTES.AGENDA}
          className={pathname === ROUTES.AGENDA ? "pagina-atual" : ""}
        >
          Agenda de eventos
        </Link>
        <Link
          to={ROUTES.CATALOGO}
          className={pathname === ROUTES.CATALOGO ? "pagina-atual" : ""}
        >
          Catálogo de serviços
        </Link>
        <Link
          to={ROUTES.LOGIN}
          className={pathname === ROUTES.LOGIN ? "pagina-atual" : ""}
        >
          Entrar
        </Link>
      </LinksNavegacao>
    </section>
  );
};

export { Cabecalho };

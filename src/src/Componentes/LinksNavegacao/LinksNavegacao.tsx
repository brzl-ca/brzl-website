import React, { PropsWithChildren } from "react";
import "./LinksNavegacao.css";

const LinksNavegacao = ({ children }: PropsWithChildren<any>) => (
  <nav className={"LinksNavegacao"}>{children}</nav>
);
export { LinksNavegacao };

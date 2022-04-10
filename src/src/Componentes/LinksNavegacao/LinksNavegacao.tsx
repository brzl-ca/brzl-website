import React, { PropsWithChildren, useEffect } from "react";
import "./LinksNavegacao.css";
import { useLocation } from "react-router-dom";

const LinksNavegacao = ({ children }: PropsWithChildren<any>) => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return <nav className={"LinksNavegacao"}>{children}</nav>;
};
export { LinksNavegacao };

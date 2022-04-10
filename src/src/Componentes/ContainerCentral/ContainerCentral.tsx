import React, { PropsWithChildren } from "react";
import "./ContainerCentral.css";
import { isDev } from "../../Paginas/devUtils";

const ContainerCentral = ({ children }: PropsWithChildren<any>) => (
  <div className={`ContainerCentral ${isDev() ? "ContainerCentral-Dev" : ""}`}>
    {/*{isDev() && (*/}
    {/*  <h2>*/}
    {/*    ContainerCentral (**/}
    {/*    {isDev() ? "DESENVOLVIMENTO" : "PRODUÇÃO"})*/}
    {/*  </h2>*/}
    {/*)}*/}
    {children}
  </div>
);

export { ContainerCentral };

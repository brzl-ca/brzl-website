import React, { PropsWithChildren } from "react";
import "./ContainerCentral.css";
import { isDev } from "../../Paginas/devUtils";

const ContainerCentral = ({ children }: PropsWithChildren<any>) => (
  <div className={isDev() ? "ContainerCentral" : ""}>
    {isDev() && (
      <h2>
        ContainerCentral (*
        {isDev() ? "DESENVOLVIMENTO" : "PRODUÇÃO"})
      </h2>
    )}
    <main>{children}</main>
  </div>
);

export { ContainerCentral };

import React, { PropsWithChildren } from "react";
import "./ContainerCentral.css";

const ContainerCentral = ({ children }: PropsWithChildren<any>) => (
  <div className="ContainerCentral">
    <h2>ContainerCentral</h2>
    <h1>{children}</h1>
  </div>
);

export { ContainerCentral };

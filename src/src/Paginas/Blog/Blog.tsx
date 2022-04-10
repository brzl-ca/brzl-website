import React, { PropsWithChildren } from "react";
import "./Blog.css";

const ArtigoIndividual = () => (
  <article className={"ArtigoIndividual"}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor
    dolores, eligendi excepturi facere laudantium magnam numquam officia porro
    provident, quae quas qui repellat repudiandae sequi sit vel! Recusandae,
    voluptates?
  </article>
);
const ListaDeArtigos = ({ children }: PropsWithChildren<any>) => (
  <section className={"ListaDeArtigos"}>{children}</section>
);

const Blog = () => {
  return (
    <section className={"Blog"}>
      <div className={"Blog-wrapper"}>
        <h1 className={"titulo"}>Blog</h1>
        <p className={"intro"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          dolor dolores, eligendi excepturi facere laudantium magnam numquam
          officia porro provident, quae quas qui repellat repudiandae sequi sit
          vel! Recusandae, voluptates?
        </p>
        <ListaDeArtigos>
          <ArtigoIndividual />
          <ArtigoIndividual />
          <ArtigoIndividual />
          <ArtigoIndividual />
          <ArtigoIndividual />
        </ListaDeArtigos>
      </div>
    </section>
  );
};

export { Blog };

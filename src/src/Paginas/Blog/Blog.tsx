import React from "react";
import "./Blog.css";
import { config } from "dotenv";
import { ListaDeArtigos } from "./ListaDeArtigos";

config();

export interface Artigo {
  post_body: string;
  post_category: string;
  post_id: string;
  post_creation_date: string;
  post_image: string;
  post_is_favorite: string;
  post_timestamp: string;
  post_title: string;
}

const Blog = () => {
  return (
    <section className={"Blog"}>
      <div className={"Blog-wrapper"}>
        <h1 className={"titulo"}>Blog</h1>
        <p className={"intro"}>
          Mais realisticamente, essa seção visa agrupar alguns posts e links
          interessantes.
        </p>
        <section className={"intro"}>
          A estrutura dos 3 itens que compoem o *PRIMARY KEY* tabela de Posts:
          <ol>
            <li>
              DATA DA CRIACAO (SEM TIMESTAMP UNICO -- uso OO:00:00) - este é o
              *partition key*
            </li>
            <li>
              TIMESTAMP - está é uma *clustering column*, que ordena os
              resultados
            </li>
            <li>
              ID - está é uma *clustering column*, que ordena os resultados
            </li>
          </ol>
          <ol>
            <li>NÃO -- [todos os] Posts em ordem data decrescente</li>
            <li>NÃO -- Posts [de data X até Y] em ordem data decrescente </li>
            <li>NÃO -- Posts [de assunto X] em ordem data decrescente </li>
            <li>
              NÃO -- Posts [com "isFavorite" true] em ordem data decrescente{" "}
            </li>
          </ol>
          <code>
            ( post_creation_date timestamp, post_timestamp timestamp, post_id
            UUID, post_title text, post_body text, post_image text,
            post_is_favorite boolean, post_category text, PRIMARY KEY
            ((post_creation_date), post_timestamp, post_id) )
          </code>
        </section>
        <ListaDeArtigos />
      </div>
    </section>
  );
};

export { Blog };

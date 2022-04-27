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
          <ul>
            <li>
              O partition key define qual o node no cluster vai armazenar o
              valor.
            </li>
            <li>
              A primary key (óbvio para a maioria) deve ser única para cada
              linha da tabela.
            </li>
            <li>
              Ela vai definir a ordem dos dados (TODO: entrar mais a fundo
              aqui).
            </li>
            <li>
              As clustering columns são armazenadas de forma ordenada e aninhada
              (nested) uma dentro da outra.
            </li>
            <li>
              (TODO: colocar exemplos) Não se pode colocar uma cláusula de
              filtro ("where") usando uma clustering column aninhada, sem
              referenciar as anteriores. Daí a menção que a ordem das colunas é
              importante na tabela.
            </li>
          </ul>
          <ul>
            Quais as consultas que temos mais interesse?
            <li>
              Vamos analisar quais estão conformes de acordo com as sugestões de
            </li>
            <li>(cada 1 query deve) pegar dados de 1 partição somente</li>
            <li>
              evitar os "full table scans" (buscas através de TODAS as
              partições)
            </li>
          </ul>
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

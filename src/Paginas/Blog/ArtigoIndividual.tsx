import React from "react";
import { Artigo } from "./Blog";
import "./ArtigoIndividual.css";

export const ArtigoIndividual = ({ artigo }: { artigo: Artigo }) => {
  return (
    <article
      className={`ArtigoIndividual ${
        artigo.post_is_favorite ? "favorito" : ""
      }`}
    >
      <img
        src={"https://codein.ca/_next/image?url=%2Fcodein-logo.png&w=1080&q=75"}
        alt={artigo.post_image}
      />
      <a
        className={"link-fingindo-ser-bloco"}
        href={artigo.post_body}
        target={"_blank"}
        rel="noreferrer"
      >
        <h3 className={"titulo"}>{artigo.post_title}</h3>
        <section className={"rodape"}>
          <span className={"span-fingindo-ser-link"}>
            {artigo.post_body.slice(8).slice(0, 42)}...
          </span>
          <span className={"data"}>
            {new Date(Date.parse(artigo.post_timestamp)).toLocaleString(
              "pt-br"
            )}
          </span>
          <span className={"categoria"}>[{artigo.post_category}]</span>
        </section>
      </a>
    </article>
  );
};

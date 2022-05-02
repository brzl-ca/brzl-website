import React from "react";
import { Artigo } from "./Blog";
import "./ArtigoIndividual.css";

export const ArtigoIndividual = ({ artigo, numeroAtual }: { artigo: Artigo, numeroAtual: number }) => {
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
        <div className={"data"}>
          ✎{new Date(Date.parse(artigo.post_timestamp)).toLocaleString(
              "pt-br", {dateStyle: "full"}
          )} :: №{numeroAtual}
        </div>
        <h3 className={"titulo"}>⫸{artigo.post_title}</h3>
        <section className={"rodape"}>

          <div className={"categoria"}>Categorias: {artigo.post_category}</div>
          <div className={"span-fingindo-ser-link"}>
            Fonte: →︎{artigo.post_body.slice(8).slice(0, 42)}...
          </div>
        </section>
      </a>
    </article>
  );
};

import React, { useEffect, useState } from "react";
import "./Blog.css";
import { config } from "dotenv";

config();

interface Artigo {
  post_body: string;
  post_category: string;
  post_id: string;
  post_creation_date: string;
  post_image: string;
  post_is_favorite: string;
  post_timestamp: string;
  post_title: string;
}

const ArtigoIndividual = ({ artigo }: { artigo: Artigo }) => {
  return (
    <article
      className={`ArtigoIndividual ${
        artigo.post_is_favorite ? "artigo--favorito" : ""
      }`}
    >
      <a
        className={"artigo--link-fingindo-ser-bloco"}
        href={artigo.post_body}
        target={"_blank"}
        rel="noreferrer"
      >
        <section className={"artigo--cabecalho"}>
          <span>
            {new Date(Date.parse(artigo.post_timestamp)).toLocaleString(
              "pt-br"
            )}
          </span>
        </section>
        <h3>{artigo.post_title}</h3>
        <section className={`artigo--corpo`}>
          <span className={"artigo--span-fingindo-ser-link"}>
            {artigo.post_body.slice(8).slice(0, 30)}...
          </span>
        </section>
        <section className={"artigo--rodape"}>
          <span>[{artigo.post_category}]</span>
        </section>
      </a>
    </article>
  );
};
const ListaDeArtigos = () => {
  const [{ data, isLoading, isError }, setUrl] = useDataApi(
    process.env.REACT_APP_API_URL ?? "https://api.w-b.dev/blog/",
    []
  );
  return (
    <section className={"ListaDeArtigos"}>
      {data.map((el: any) => (
        <ArtigoIndividual key={el.post_id} artigo={el} />
      ))}
    </section>
  );
};

const useDataApi = (initialUrl: string, initialData: any): any => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(url);
        const resultJSON = await result.json();
        setData(resultJSON.message);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData().then((r) => console.log(r));
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

const Blog = () => {
  return (
    <section className={"Blog"}>
      <div className={"Blog-wrapper"}>
        <h1 className={"titulo"}>Blog</h1>
        <p className={"intro"}>
          Mais realisticamente, essa seção visa agrupar alguns posts e links
          interessantes.
        </p>
        <ListaDeArtigos />
      </div>
    </section>
  );
};

export { Blog };

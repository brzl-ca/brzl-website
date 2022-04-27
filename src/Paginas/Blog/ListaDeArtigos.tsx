import React from "react";
import "./ListaDeArtigos.css";
import { ArtigoIndividual } from "./ArtigoIndividual";
import { useDataApi } from "./UseDataApi";

export const ListaDeArtigos = () => {
  // const [{ data, isLoading, isError }, setUrl] = useDataApi(
  const [{ data }] = useDataApi(
    process.env.REACT_APP_API_URL ?? "https://api.w-b.dev/blog/",
    []
  );
  const artigos: any[] = [...data];
  const compareDescendingTimestamps = (a: any, b: any) => {
    // Note: `a - b` generates an ASCENDING ordering
    return a.post_timestamp < b.post_timestamp ? 1 : -1;
  };
  return (
    <section className={"ListaDeArtigos"}>
      {artigos.sort(compareDescendingTimestamps).map((el: any) => (
        <ArtigoIndividual key={el.post_id} artigo={el} />
      ))}
    </section>
  );
};

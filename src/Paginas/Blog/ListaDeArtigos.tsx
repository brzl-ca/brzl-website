import React, {useEffect, useState} from "react";
import "./ListaDeArtigos.css";
import { ArtigoIndividual } from "./ArtigoIndividual";
import { useDataApi } from "./UseDataApi";

export const ListaDeArtigos = () => {
  const [{ data }] = useDataApi(
    process.env.REACT_APP_API_URL ?? "https://api.w-b.dev/blog/",
    []
  );
  useEffect(() => {
    setArtigos([...data])
    buildCategories(data)
  }, [data])
  const [artigos, setArtigos] = useState([...data])
  const [categorias, setCategorias] = useState([])
  // const artigos: any[] = [...data];
  const compareDescendingTimestamps = (a: any, b: any) => {
    // Note: `a - b` generates an ASCENDING ordering
    return a.post_timestamp < b.post_timestamp ? 1 : -1;
  };
  return (
    <section className={"ListaDeArtigos"}>
      <div>
        {
          categorias.map(el => <button onClick={() => setCategorias(el)}>{el}</button>)
        }
      </div>
      {artigos.sort(compareDescendingTimestamps).map((el: any, i: number) => (
        <ArtigoIndividual key={el.post_id} artigo={el} numeroAtual={artigos.length - i} />
      ))}
    </section>
  );
};
function buildCategories(data: any[]) {
    console.log(data)
}


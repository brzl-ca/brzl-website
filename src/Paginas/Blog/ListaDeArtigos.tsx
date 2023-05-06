import React, { useEffect, useState } from "react";
import "./ListaDeArtigos.css";
import { ArtigoIndividual } from "./ArtigoIndividual";
import { useDataApi } from "./UseDataApi";
import { Artigo } from "./Blog";

export const ListaDeArtigos = () => {
  const [{ data }] = useDataApi(
    "https://api.w-b.dev/blog/",
    []
  );
  const [categorias, setCategorias] = useState<string[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  useEffect(() => {
    setArtigos([...data]);
    setCategorias(buildCategories(data));
  }, [data]);
  const [artigos, setArtigos] = useState<Artigo[]>([...data]);
  // const artigos: any[] = [...data];
  const compareDescendingTimestamps = (a: Artigo, b: Artigo) => {
    // Note: `a - b` generates an ASCENDING ordering
    return a.post_timestamp < b.post_timestamp ? 1 : -1;
  };
  return (
    <section className={"ListaDeArtigos"}>
      <div className={"CategoriasPosts"}>
        {categorias.map((el: string) => (
          <button
            key={el}
            className={`botao-filtro ${filter === el ? "selecionado" : ""}`}
            onClick={() => setFilter(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="PostsWrapper">
        {artigos
          .filter((el: Artigo) =>
            filter
              ? el.post_category.toLocaleUpperCase().includes(filter)
              : true
          )
          .sort(compareDescendingTimestamps)
          .map((el: any, i: number) => (
            <ArtigoIndividual
              key={el.post_id}
              artigo={el}
              numeroAtual={artigos.length - i}
            />
          ))}
      </div>
    </section>
  );
};
function buildCategories(categorias: any[]): string[] {
  const categoriasSet = new Set<string>();
  categorias.forEach((categoria) => {
    const categoryArray = categoria.post_category.split(", "); //First attempt to clear the cat string with space
    categoryArray.forEach((filteredCat: string) =>
      categoriasSet.add(filteredCat.toLocaleUpperCase())
    );
  });
  return Array.from(categoriasSet).sort((a, b) => (a > b ? 1 : -1));
}

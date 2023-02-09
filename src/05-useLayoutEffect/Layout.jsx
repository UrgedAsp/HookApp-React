import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, species } = !!data && data;

  //En caso de que una api retorne un array
  // const { name, species } = !!data && data[0];

//   console.log({ data, isLoading, hasError });

  // if(isLoading) return <h1>Cargando...</h1>

  return (
    <>
      <h1>RickAndMorty Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote name={name} species={species} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};

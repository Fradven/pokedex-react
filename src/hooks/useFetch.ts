import { useState, useEffect } from "react";

const useFetch = (src: RequestInfo) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [nextSrc, setNextSrc] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logic = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetch(src);
      const dataJson = await data.json();
      setPokemons((prev) => [...prev, ...dataJson.results]);
      if (dataJson.next) setNextSrc(dataJson.next);
      if (dataJson.previous) setPrevSrc(dataJson.previous);
      setLoading(false);
    } catch (e: any) {
      setError(e);
    }
  };

  useEffect(() => {
    logic();
  }, [logic, src]);

  return { pokemons, loading, error, nextSrc, prevSrc };
};

export default useFetch;
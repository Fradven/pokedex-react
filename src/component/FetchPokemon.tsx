import React, { useState, useRef, useCallback } from "react";
import ListPokemon from "./ListPokemon";
import useFetch from "../hooks/useFetch.js";
import './ListPokemon.scss'

const App = () => {
    const [src, setSrc] = useState("https://pokeapi.co/api/v2/pokemon");

    const { pokemons, loading, error, nextSrc } = useFetch(src);

    const observer: any = useRef();
    const lastPokemon = useCallback(
    (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextSrc) {
            setSrc(nextSrc);
        }
        });
        if (node) observer.current.observe(node);
    },
    [loading, nextSrc]
    );

    return (
    <>
        <div className="pokemon">
        {pokemons.map((pokemon, index) => {
            if (pokemons.length === index + 1) {
            return (
                <div ref={lastPokemon} className="pokemon__card">

                <ListPokemon name={pokemon.name} key={pokemon.name} />
                </div>
            );
        }
        return (
            <div key={pokemon.name}>
            {pokemon.name}
            </div>
            );
        })}
    </div>
    <div className="next-btn">
        <button>Next</button>
    </div>
    <div>
        <p>loading : {loading.toString()}</p>
        <p>nextSrc : {nextSrc}</p>
        <p>Error : {error.toString()}</p>
    </div>
    {loading ? <div>Loading ... </div> : null}
    {error ? <div>Error</div> : null}
    </>
    );
};

export default App;


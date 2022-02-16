import React from 'react';
import { axios } from '../javascript/axios';

interface Props {
    name: string
    setPokemon: any
    item: string
}

/**
 * fetch data depending on the appropiate page from the api
 * @param param0 
 * @returns appropriate data page
 */
const ButtonFetch: React.FC<Props> = ({ name, setPokemon, item }) => {
    /**
     * fetch data in the appropriate given page set up by item
     */
    const loadList = async() => {
        const res = await axios.get(`type/${name}`)

        if (item === "pokemon") setPokemon(res.data.pokemon)
        if (item === "moves") setPokemon(res.data.moves)
    }

    return <button className={name} onClick={loadList}>{name}</button>;
}

export default ButtonFetch;

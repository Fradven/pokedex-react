import React from 'react';
import { axios } from '../javascript/axios';

interface Props {
    name: string
    setPokemon: any
    item: string
}

const ButtonFetch: React.FC<Props> = ({ name, setPokemon, item }) => {
  
const loadList = async() => {
    const res = await axios.get(`type/${name}`)

    if (item === "pokemon") setPokemon(res.data.pokemon)
    if (item === "move") setPokemon(res.data.move)
    

}
  
    return <button className={name} onClick={loadList}>{name}</button>;
}

export default ButtonFetch;

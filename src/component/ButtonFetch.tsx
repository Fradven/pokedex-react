import React from 'react';
import { axios } from '../javascript/axios';

interface Props {
    name: string
    setPokemon: any
}

const ButtonFetch: React.FC<Props> = ({ name, setPokemon }) => {
  
const loadList = async() => {
    const res = await axios.get(`type/${name}`)
    setPokemon(res.data.pokemon)

}
  
    return <button className={name} onClick={loadList}>{name}</button>;
}

export default ButtonFetch;

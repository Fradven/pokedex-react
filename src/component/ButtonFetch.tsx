import React from 'react';
import { axios } from '../javascript/axios';

interface Props {
    link: string
    name: string
    setPokemon: any
}

const ButtonFetch: React.FC<Props> = ({link, name, setPokemon}) => {
  
const loadList = async() => {
    const res = await axios.get(link + name)
    setPokemon(res.data.pokemon)

}
  
    return <button className={name} onClick={loadList}>{name}</button>;
}

export default ButtonFetch;

import React, { useState, useEffect } from 'react';
import { axios } from '../javascript/axios.js'
import ButtonFetch from '../component/ButtonFetch';

interface Props {
    setTopList: React.Dispatch<React.SetStateAction<never[]>>
    item: string
}

const TypeFetch: React.FC<Props> = ({ setTopList, item }) => {
    const [type, setType] = useState([])
    const [list, setList] = useState([])


    const getPokemon = async() => {
        const res = await axios.get(`type`)

        setType(res.data.results);
    }

    useEffect(() => {
        setTopList(list)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list])

    useEffect (() => {
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
      <>
    <div className="type-page">
    {(type.length === 0) ? 'loading' : type.map((data: { name: string; })=> {
        return (
            <div key={data.name} className="type-page__type">
                <ButtonFetch name={data.name} setPokemon={setList} item={item} />

            </div>
        )
    })}
</div>
    </>
  )
}

export default TypeFetch;

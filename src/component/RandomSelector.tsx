import React, { useState, useEffect } from 'react';
import IndividualPage from './IndividualPage';
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'

function RandomSelector() {
    const [name, setName] = useState<any>()

    const randomNumber = () => {
        let x = Math.floor((Math.random() * 1000) + 1)
        return x
    }
    const getRandomPokemon = async() => {
        const res = await axios.get(`${randomNumber()}`)

        if (res && res.data) setName(res.data.name)
    }

    useEffect (() => {
        getRandomPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
    {name ?  <IndividualPage name={name}/>
          : <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>}
    </>
  )
}

export default RandomSelector;

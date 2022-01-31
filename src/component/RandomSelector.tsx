import React, { useState, useEffect } from 'react';
import IndividualPage from './IndividualPage';
import { axios } from './javascript/axios.js'

function RandomSelector() {
    const [name, setName] = useState<any>([])

    const randomNumber = () => {
        let x = Math.floor((Math.random() * 1000) + 1)
        return x
    }
    const getRandomPokemon = async() => {
        const res = await axios.get(`${randomNumber()}`)

        if (res && res.data) setName(res.data)
    }

    useEffect (() => {
        getRandomPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return <IndividualPage name={name}/>;
}

export default RandomSelector;

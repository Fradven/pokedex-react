import React, { useState, useEffect } from 'react';
import IndividualPage from './IndividualPage';
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'

/**
 * Create a random number to select a pokemon and fetch pokemon from the api info
 * @returns individualPage with a random pokemon
 */
function RandomSelector() {
    const [name, setName] = useState()

    //generate a random number between 1 and 810
    const randomNumber = () => {
        let x = Math.floor((Math.random() * 810) + 1)
        return x
    }
    //fetch inforamtion from a random pokemon 
    const getRandomPokemon = async() => {
        const res = await axios.get(`pokemon/${randomNumber()}`)

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

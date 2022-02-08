import React, { useState, useEffect } from 'react';
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'
import Popup from './Popup';
import SmallPokemonList from './SmallPokemonList';

interface Props {
    name:string
}

interface FlavorText {
    flavor_text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    version_group: { name: string; }
    language: { name: string; }
    text: {}
}

interface Move {
    type: {name: string}
    damage_class: {name: string}
    flavor_text_entries: Array<FlavorText>
    power: number
    pp: number
    accuracy: number
    learned_by_pokemon: {}
}

const ListMoves: React.FC<Props> = ({name}) => {
    const [move, setMove] = useState<Move>()
    const [popup, setPopup] = useState(false)
    const [pokemon, setPokemon] = useState<any>()

    //fetching data from individual page of moves
    const getMove = async() => {
        const res = await axios.get(`move/${name}`)
        setMove(res.data);
    }

    useEffect(() => {
        getMove()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let flavor = move?.flavor_text_entries
    
    const englishFilter = (text: { version_group: { name: string; }; language: { name: string; }; flavor_text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        if (text.version_group.name === "sword-shield" && text.language.name === "en") {
            return <p key={text.language.name}>{text.flavor_text}</p>
        }
    }

    const loadPokemon = () => {
        setPokemon(move?.learned_by_pokemon)
        setPopup(true)
    }

    useEffect (() => {
        console.log(pokemon)
    }, [pokemon])
    const openPopup = () => setPopup(false)


  return (
      <>
      {move 
        ? <div className={"move" + " " + move.damage_class.name}>
            <div className="move__header">
            <div className="move__type">
            <h3 className={move.type.name}>{name}</h3>
            </div>
                <div className="move__damage-class">
                    <p className="move__damage-class-type">{move.damage_class.name}</p>
                </div>
            </div>
            

            <div className="move__flavor-text">
                {flavor?.map(englishFilter)}
            </div>
            <div className="move__lower">
                <div className="move__stats">
                    <div className="move__power">
                        {move.power === null ? <p>Power: - </p> : <p>power: {move.power}</p>}
                    </div>
                    <div className="move__accuracy">
                        {move.accuracy === null ? <p>Accuracy: - </p> : <p>Accuracy: {move.accuracy}</p>}                
                    </div>
                    <div className="move__pp">
                        <p>PP: {move.pp}</p>
                    </div>
                </div>
                <div className="move__button">
                    <button onClick={loadPokemon}>Pokemon</button>
                </div>
            </div>
        </div> 

        : <div className="pokemon__load-ctn">
        <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>

        }

        {!pokemon ? ""
        :<Popup show={popup}>
            <div className="popup">
                <button className="returnPopup" onClick={openPopup}>Return</button>
                {pokemon.length === 0 ? "loading" : pokemon.map((data: { name: string | undefined; }) => {
                return <SmallPokemonList name={data.name} />
                })}
            </div>
        </Popup> }
      </>
  );
}

export default ListMoves;

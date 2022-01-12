import React from 'react'
import './ListPokemon.scss'

interface Props {
    name: string
}

const ListPokemon: React.FC<Props> = ({name}) => {
    return (
        <div className='pokemon__card'>
            <h3 className="pokemon__name">{name}</h3>
            <button className="pokemon__detail">More Details</button>
        </div>
    )
}

export default ListPokemon

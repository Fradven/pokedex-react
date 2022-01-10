import React from 'react'

interface Props {
    name: string

}

const ListPokemon: React.FC<Props> = ({name}) => {
    return (
        <div>
            <h3 className="pokemon__name">{name}</h3>
        </div>
    )
}

export default ListPokemon

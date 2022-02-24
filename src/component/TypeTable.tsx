import React from 'react'

interface Props {
    normal: number
    fire: number
    water: number
    grass: number
    electric: number
    ice: number
    fighting: number
    poison: number
    ground: number
    flying: number
    psychic: number
    bug: number
    rock: number
    ghost: number
    dragon: number
    dark: number
    steel: number
    fairy: number
}
const TypeTable: React.FC<Props> = ({
    normal,
    fire,
    water,
    grass,
    electric,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dragon,
    dark,
    steel,
    fairy
}) => {
    const typeChart = [
        {
            type: 'normal',
            value: normal
        },
        {
            type: 'fire',
            value: fire
        },
        {
            type: 'water',
            value: water
        },
        {
            type: 'grass',
            value: grass
        },
        {
            type: 'electric',
            value: electric
        },
        {
            type: 'ice',
            value: ice
        },
        {
            type: 'fighting',
            value: fighting
        },
        {
            type: 'poison',
            value: poison
        },
        {
            type: 'ground',
            value: ground
        },
        {
            type: 'flying',
            value: flying
        },
        {
            type: 'psychic',
            value: psychic
        },
        {
            type: 'bug',
            value: bug
        },
        {
            type: 'rock',
            value: rock
        },
        {
            type: 'ghost',
            value: ghost
        },
        {
            type: 'dragon',
            value: dragon
        },
        {
            type: 'dark',
            value: dark
        },
        {
            type: 'steel',
            value: steel
        },
        {
            type: 'fairy',
            value: fairy
        },
    ]
  return (
    <>
        {typeChart.map(element => <p key={element.type}>{element.type} : {element.value}</p>)}
    </>
  )
}

export default TypeTable
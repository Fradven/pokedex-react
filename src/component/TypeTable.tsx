import React from 'react'
import Bug from '../img/type_icon/bug.svg'
import Dark from '../img/type_icon/dark.svg'
import Dragon from '../img/type_icon/dragon.svg'
import Electric from '../img/type_icon/electric.svg'
import Fairy from '../img/type_icon/fairy.svg'
import Fighting from '../img/type_icon/fighting.svg'
import Fire from '../img/type_icon/fire.svg'
import Flying from '../img/type_icon/flying.svg'
import Ghost from '../img/type_icon/ghost.svg'
import Grass from '../img/type_icon/grass.svg'
import Ground from '../img/type_icon/ground.svg'
import Ice from '../img/type_icon/ice.svg'
import Normal from '../img/type_icon/normal.svg'
import Poison from '../img/type_icon/poison.svg'
import Psychic from '../img/type_icon/psychic.svg'
import Rock from '../img/type_icon/rock.svg'
import Steel from '../img/type_icon/steel.svg'
import Water from '../img/type_icon/water.svg'

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
            icon: Normal,
            value: normal
        },
        {
            type: 'fire',
            icon: Fire,
            value: fire
        },
        {
            type: 'water',
            icon: Water,
            value: water
        },
        {
            type: 'grass',
            icon: Grass,
            value: grass
        },
        {
            type: 'electric',
            icon: Electric,
            value: electric
        },
        {
            type: 'ice',
            icon: Ice,
            value: ice
        },
        {
            type: 'fighting',
            icon: Fighting,
            value: fighting
        },
        {
            type: 'poison',
            icon: Poison,
            value: poison
        },
        {
            type: 'ground',
            icon: Ground,
            value: ground
        },
        {
            type: 'flying',
            icon: Flying,
            value: flying
        },
        {
            type: 'psychic',
            icon: Psychic,
            value: psychic
        },
        {
            type: 'bug',
            icon: Bug,
            value: bug
        },
        {
            type: 'rock',
            icon: Rock,
            value: rock
        },
        {
            type: 'ghost',
            icon: Ghost,
            value: ghost
        },
        {
            type: 'dragon',
            icon: Dragon,
            value: dragon
        },
        {
            type: 'dark',
            icon: Dark,
            value: dark
        },
        {
            type: 'steel',
            icon: Steel,
            value: steel
        },
        {
            type: 'fairy',
            icon: Fairy,
            value: fairy
        },
    ]
  return (
    <>
        {typeChart.map(element => {
            return <div  key={element.type} className="weakness-table">
                <div className="weakness-table__icon">
                    <img src={element.icon} alt={element.type} />
                </div>
                <p>{element.value}</p>
            </div>
        })}
    </>
  )
}

export default TypeTable
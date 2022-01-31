import React from "react";
import loading from '../img/loading.gif'
import './individualPage.scss'

interface TypeArray {
    type: {name: string},
    element: {}
}

interface AbilityArray {
    ability: {name: string}, 
    is_hidden: boolean,
    data: {}
}

interface StatsArray {
    base_stat: number,
    stat: {name: string}
}

interface Props {
    name: {
        name: string,
        types: Array<TypeArray>,
        sprites: any,
        height: number,
        weight: number,
        lenght: {},
        abilities: Array<AbilityArray>,
        stats: Array<StatsArray>
        }
}

const IndividualPage: React.FC<Props> = ({name}) => {
  return (
  <>
  {!name 
  ? 
    <div className="pokemon__load-ctn">
        <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
    </div>
  :
    <div className="individual-pokemon">
        <h2 className="individual-pokemon__name">{name.name}</h2>
        <div className="individual-pokemon__main-ctn">

            <div className="individual-pokemon__left-ctn">

                <div className="pokemon__type">
                    {name.types?.map((element) =>
                        <p key={element.type.name} className={element.type.name}>{element.type.name}</p>
                        )}
                    </div>

                <div className="individual-pokemon__sprite">
                        <img src={name.sprites?.front_default} alt='sprite'/>
                </div>

                <div className="individual-pokemon__physics">
                    <p className="individual-pokemon__height">Height: {name.height}</p>
                    <p className="individual-pokemon__weight">Weight: {name.weight}</p>
                </div>
            </div>

            <div className="individual-pokemon__right-ctn">
                <div className="individual-pokemon__abilities">
                    <h3>Abilities: </h3>
                    <ul className="individual-pokemon__abilities-ctn">

                    {(name.lenght === 0) ? "loading" : name.abilities?.map(data => {
                        if (data.is_hidden === true) {
                            return <li key={data.ability.name} className="individual-pokemon__ability hidden">Hidden: {data.ability.name}</li>
                        } else {
                            return <li key={data.ability.name} className="individual-pokemon__ability">{data.ability.name}</li>
                        }
                    })}

                    </ul>
                </div>

                <div className="individual-pokemon__stats">

                    <h3>Base Stats: </h3>

                    <ul className="individual-pokemon__stat-ctn">
                    {(name.lenght === 0) ? 'loading' : name.stats?.map((stat)=> {
                        if (stat.stat.name === 'special-defense') {
                            return <li key={stat.stat.name}>sp.def: {stat.base_stat}</li>
                        } else if (stat.stat.name === 'special-attack') {
                            return <li key={stat.stat.name}>sp.atk: {stat.base_stat}</li>
                        } else {
                        return <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                        }
                    })}
                    </ul>



                </div>
            </div>
        </div>
    </div>
}
  </>);
}

export default IndividualPage;

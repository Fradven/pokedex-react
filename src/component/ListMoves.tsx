import React, { useState, useEffect } from 'react';
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'

interface Props {
    name:string
}

interface Move {
    type: {name: string}
    damage_class: {name: string}
}

const ListMoves: React.FC<Props> = ({name}) => {
    const [move, setMove] = useState<Move>()

    //fetching data from individual page of moves
    const getMove = async() => {
        const res = await axios.get(`move/${name}`)
        setMove(res.data);
    }

    useEffect(() => {
        getMove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
      <>
      {move 
        ? <div className={"move" + " " + move.damage_class.name}>
            <h3 className="move__name">{name}</h3>
            <div className="move__type">
                <p className={move.type.name}>{move.type.name}</p>
            </div>

            <div className="move__damage-class">
                <p className="move__damage-class-type">{move.damage_class.name}</p>
            </div>
        </div> 
        : <div className="pokemon__load-ctn">
        <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>

        }
      </>
  );
}

export default ListMoves;

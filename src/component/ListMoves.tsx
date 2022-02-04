import React, { useState, useEffect } from 'react';
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'

interface Props {
    name:string
}
const ListMoves: React.FC<Props> = ({name}) => {
    const [move, setMove] = useState()

    //fetching data from individual page of moves
    const getMove = async() => {
        const res = await axios.get(`move/${name}`)
        console.log(res)

        setMove(res.data);
    }

    useEffect(() => {
        getMove()
        console.log(move)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
      <>
      {move 
        ? <div className="move">
            <h3 className="move__name">{name}</h3>
        </div> 
        : <div className="pokemon__load-ctn">
        <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>

        }
      </>
  );
}

export default ListMoves;

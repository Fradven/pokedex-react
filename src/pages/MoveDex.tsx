import React, { useState } from 'react';
import '../style/home.scss'
import TypeFetch from '../component/TypeFetch';
import ListMoves from '../component/ListMoves';
import { Carousel } from 'react-bootstrap';
import RandomSelector from '../component/RandomSelector';

function MoveDex() {
    const [list, setList] = useState([])
    const item = "moves"

    console.log(list)
    return (
    <>
        <h2 className='page-name'>Move List</h2>
        <TypeFetch setTopList={setList} item={item} />
        <div className="pokemon">
                {(list.length === 0) 
                ? <Carousel controls={false} fade>
                    <Carousel.Item>
                        <RandomSelector />
                    </Carousel.Item> 
                    <Carousel.Item>
                        <RandomSelector />
                    </Carousel.Item> 
                    <Carousel.Item>
                        <RandomSelector />
                    </Carousel.Item> 
                </Carousel>
                : list.map((data: { moves: any, name: string; })=> 
                <ListMoves name={data.name} key={data.name} />
                )}
            </div>
    </>
    )
}

export default MoveDex;

import React from 'react';
import '../style/home.scss'
import TypeFetch from '../component/TypeFetch';

export default function Home() {

    return (
        <>
            <h2 className='page-name'>Select a Type of Pokémon</h2>
            <TypeFetch/>
        </>
    )}

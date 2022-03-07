import React, { useEffect, useState } from 'react'
import { axios } from '../javascript/axios'
import ListPokemon from '../component/ListPokemon'
import '../style/searchbar.scss'

function SearchBar() {
    const [pokeName, setPokeName] =useState<string[]>([])
    const [nameHolder, setNameHolder] = useState([])
    const [filteredList, setFilteredList] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
    const [query, setQuery] = useState('')

    const getPokes = async() => {
        const response = await axios.get(currentPage) 
        const data = response.data.results;
        const next = response.data.next
        setNameHolder(data.map((e: { name: string }) => {
            return e.name
        }))

        if (response && next !== null) {
            setCurrentPage(next)
            setPokeName((prev: string[])=>[...prev, ...nameHolder])
        } 
    }

    const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTimeout (function () {
            setQuery(e.target.value)         
        }, 2000)
    }

    useEffect(() => {
        getPokes()
    }, [currentPage])

    useEffect(() => {
        if(query.length >= 3){
        setFilteredList(pokeName.filter((name: string | string[]) => name.includes(query)).map(filtered => {
            return filtered
        }))}
    }, [query])
  return (
      <>
      <h2 className='page-name'>Search for Pokémon</h2>
        <div className="searchbar">
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' onChange={search} />
        </div>
        <div className="pokemon">
        {
            filteredList.map((e: string, index: React.Key | null | undefined) => {
                return <ListPokemon key={index} name={e}/>
            })
        } 
        </div>
      </>
    
  )
}

export default SearchBar
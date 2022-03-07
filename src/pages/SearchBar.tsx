import React, { useEffect, useState } from 'react'
import { axios } from '../javascript/axios'
import ListPokemon from '../component/ListPokemon'
import Carousel from 'react-bootstrap/Carousel';
import RandomSelector from '../component/RandomSelector';
import { FiSearch } from 'react-icons/fi'
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
            <label htmlFor="search">{<FiSearch/>}</label>
            <input type="text" id='search' placeholder='Enter Pokémon name...' onChange={search} />
        </div>
        <div className="pokemon">
                {(filteredList.length === 0) 
                ? <div className="pokemon__carousel">
                    <Carousel variant="dark" controls={false} touch>
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
                    </div>
                : filteredList.map((e: string, index: React.Key | null | undefined) => {
                    return <ListPokemon key={index} name={e}/>
                })}
            </div>
      </>
    
  )
}

export default SearchBar
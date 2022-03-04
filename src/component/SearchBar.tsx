import React, { useEffect, useState } from 'react'
import { axios } from '../javascript/axios'

function SearchBar() {
    const [pokeName, setPokeName] =useState<any>([])
    const [nameHolder, setNameHolder] = useState([])
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
            setPokeName((prev: any)=>[...prev, ...nameHolder])
        } 
    }

    const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTimeout (function () {
            setQuery(e.target.value)
            console.log(query)
        }, 2000)
    }

    useEffect(() => {
        getPokes()
    }, [currentPage])
  return (
      <>
        <div className="pokedex-header__search-ctn">
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' onChange={search} />
        </div>
        {
            pokeName.map((e: [string], index: React.Key | null | undefined) => {
                return <div key={index} className="test">{e}</div>
            })
        } 
      </>
    
  )
}

export default SearchBar
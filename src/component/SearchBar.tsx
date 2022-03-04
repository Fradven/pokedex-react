import React, { useEffect, useState } from 'react'
import { axios } from '../javascript/axios'

function SearchBar() {
    const [pokeName, setPokeName] =useState<any>([])
    const [nameHolder, setNameHolder] = useState([])
    const [nextPage, setNextPage] = useState("")
    const [query, setQuery] = useState('')

    const getPokes = async() => {
        const response = await axios.get('pokemon') 
        const data = response.data.results;
        const next = response.data.next

        setNameHolder(data.map((e: { name: string }) => {
            return e.name
        }))
        setNextPage(next)

        if (response && next !== null) {
            setNextPage(next)
            setPokeName((prev: any)=>[...prev, ...nameHolder])
            console.log(nextPage)
            console.log(pokeName)
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
    }, [nextPage])
  return (
      <>
        <div className="pokedex-header__search-ctn">
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' onChange={search} />
        </div>
        {
            pokeName.map((e: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
                return <div className="test">{e}</div>
            })
        } 
      </>
    
  )
}

export default SearchBar
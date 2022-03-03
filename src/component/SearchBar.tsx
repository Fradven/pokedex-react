import React, { useState } from 'react'

function SearchBar() {
    const [query, setQuery] = useState('')

    const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTimeout (function () {
            setQuery(e.target.value)
            console.log(query)
        }, 2000)
    }
  return (
      <>
      <div className="pokedex-header__search-ctn">
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' onChange={search} />
        </div> 
      </>
    
  )
}

export default SearchBar
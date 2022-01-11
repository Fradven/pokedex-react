import React from 'react'

interface PageFunction {
    next: () => void
    previous: () => void
}

const Pagination: React.FC<PageFunction> = ({next, previous}) => {

    return (
        <div>
            {previous && <button onClick={previous}>Previous</button>}
            {next && <button onClick={next}>Next</button>}            
        </div>
    )
}

export default Pagination
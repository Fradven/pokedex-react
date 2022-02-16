import React, { Suspense } from 'react'
import loading from '../img/loading.gif'

const SuspenseElement: React.FC = ({children}) => {
  return (
    <Suspense
    fallback= {
        <div className="pokemon__load-ctn">
            <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>
    }
    >{children}</Suspense>
  )
}

export default SuspenseElement
import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();
  return (
    <div>
      <section className='search-section'>
        <h2>Search Your Favourite Movies</h2>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type='text' placeholder='search here' value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
      </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </div>
  )
}

export default Search
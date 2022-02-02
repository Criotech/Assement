import React from 'react';


const Search = ({handleSearch}) => {
    return (
        <div>
            <input onChange={(event)=>handleSearch(event.target.value)} type="text" />
        </div>
    )
}

export default Search;
import React from 'react'
import search from "../../../images/search.png"

function Search() {
  return (
    <div className='search-div' >
        <div className="search-bar">
        <input type="text" />
        <img src={search} alt="" />
        </div>
       <div className="search-content">
       <p>All</p>
        <p>Web</p>
        <p>CyberSecurity</p>
        <p>Trends</p>
        <p>Design</p>
       </div>
    </div>
  )
}

export default Search
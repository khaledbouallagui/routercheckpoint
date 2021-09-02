import React from 'react';
import Startrating from './Startrating';

const Search = ({searchvalue,handlesearch,serachrate,handlerate}) => {
  return (
    <div className="header-container">
      <h1>our movie app</h1>
      <div className="search-container">
      <input type="text"  value={searchvalue} className="inp"  onChange={handlesearch
       }/>
     <Startrating rate={serachrate} handlerate={handlerate}/>
      </div>
    </div>
  );
}

export default Search;

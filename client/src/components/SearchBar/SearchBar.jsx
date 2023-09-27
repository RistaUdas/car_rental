import React from 'react';

const SearchBar = () => {
  return (
    <div className="search__box">
              <input type="text" placeholder="Enter a car name..."/>
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
  )
}

export default SearchBar

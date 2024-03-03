
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Film adini girin"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};
export default SearchBar;















// import React from 'react'


// const Searchbox = (props) => {
//   return (
//     <div className="col col-sm-4">
//         <input 
//          className="form-control" 
//          placeholder='type to text'
//          value={props.value}>
//          onChange={(event)=> props.setSearchValue(event.target.value)}
//         </input>
//     </div>
//   )
// }


// export default Searchbox



import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchImages } from "../search/searchThunk";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
  
    const handleSearch = () => {
      dispatch(fetchImages(query));
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;
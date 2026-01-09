import { useState } from "react";
import SearchBarPresentational from "./SearchBar-Presentational";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  return (
    <SearchBarPresentational searchTerm={searchTerm} onChange={handleChange} />
  );
}

export default SearchBar;

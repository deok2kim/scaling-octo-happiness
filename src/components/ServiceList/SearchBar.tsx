import { useState, useEffect } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  placeholder?: string;
}

function SearchBar({ onSearch, placeholder = "검색" }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(keyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClear = () => {
    setKeyword("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={keyword}
        onChange={handleChange}
      />
      {keyword && (
        <button className="search-clear" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;

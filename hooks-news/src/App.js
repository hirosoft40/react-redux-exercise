import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("react hook");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();
  // === new way to get API
  // useEffect can return only clean up or nothing
  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(response.data.hits);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  // === traditional way to get API Call
  // useEffect(() => {
  //   axios
  //     .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
  //     .then(res => {
  //       console.log(res.data);
  //       setResults(res.data.hits);
  //     });
  // }, []);

  const handleSearch = e => {
    e.preventDefault();
    getResults();
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-indigo-lightest shadow-lg rounded">
      <img
        src="https://icon.now.sh/react/c0c"
        alt="react logo"
        className="float-right h-12"
      />
      <h1 className="text-grey-darker font-thin">Hooks News</h1>
      <form onSubmit={handleSearch} className="mb-2">
        <input
          type="text"
          onChange={event => setQuery(event.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button
          type="submit"
          className="bg-indigo-dark hover:bg-transparent hover:text-indigo-dark border border-indigo-dark text-white rounded m-1 p-1"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClearSearch}
          className="bg-teal-dark hover:bg-transparent hover:text-teal-dark border border-teal-dark text-white rounded m-1 p-1"
        >
          Clear
        </button>
      </form>
      {loading ? (
        <div className="font-bold text-orange-dark ">Loading results...</div>
      ) : (
        <ul className="list-reset leading-normal">
          {results.map(result => (
            <li key={result.objectID}>
              <a
                href={result.url}
                className="text-indigo-dark hover:text-indigo-darkest"
              >
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="text-red font-bold">{error.message}</div>}
    </div>
  );
}

import React, { useState } from "react";
import Axios from "axios";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import { FaSearch } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";


export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="flex flex-col">
      <div className="text-white flex justify-between items-center p-3">
        <div className="flex items-center space-x-3 text-[#ca0913]">
          <MdLocalMovies className="text-2xl" />
          <div className="flex items-center font-bold text-2xl">FlixHub </div>
        </div>
        <div className="flex items-center space-x-4 px-3 py-1 rounded-full ml-5 bg-[#33373d]">
          <FaSearch className="text-[#ca0913]" />
          <input
            className="text-white font-medium outline-none bg-[#33373d]"
            placeholder="Search Movie..."
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className="flex flex-wrap p-7 gap-6 justify-evenly">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <div className="h-[calc(100vh-150px)] w-screen flex flex-col space-y-4 justify-center items-center">
            <img
              className="h-1/4 w-1/4"
              src="searching.svg"
              alt="search_image"
            />
            <p className="font-semibold text-lg text-gray-400">
              Search your movie from search bar
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

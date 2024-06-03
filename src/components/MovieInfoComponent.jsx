import React, { useState, useEffect } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import { IoMdCloseCircle } from "react-icons/io";
import { ThreeDots } from "react-loader-spinner";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="flex px-7 py-5 justify-center border-b-2 border-b-gray-400">
      {movieInfo ? (
        <div className="flex p-5 rounded-lg bg-gray-800">
          <img className="rounded-lg" src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className="flex flex-col m-5">
            <div className="font-bold text-black my-4 whitespace-nowrap overflow-hidden capitalize overflow-ellipsis">
              <span className="text-3xl text-gray-100">{movieInfo?.Title}</span>
            </div>
            <div className="text-xs w-3/4 flex-wrap font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
              <span className="text-gray-300">{movieInfo?.Plot}</span>
            </div>
            <div className="flex">
              <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
                <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">IMDB</span><span className="text-gray-300">{movieInfo?.imdbRating}</span>
              </div>
              <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
              <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Runtime</span><span className="text-gray-300">{movieInfo?.Runtime}</span>
              </div>
              <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
              <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Released</span><span className="text-gray-300">{movieInfo?.Released}</span>
              </div>
            </div>
            <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
            <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Genre</span><span className="text-gray-300">{movieInfo?.Genre}</span>
            </div>
            <div className="flex">
              <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
              <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Language</span><span className="text-gray-300">{movieInfo?.Language}</span>
              </div>
              <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
              <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Rated</span><span className="text-gray-300">{movieInfo?.Rated}</span>
              </div>
            </div>
            <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
            <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Director</span><span className="text-gray-300">{movieInfo?.Director}</span>
            </div>
            <div className="text-xs space-x-2 font-semibold text-black h-fit p-2 cursor-pointer opacity-80">
            <span className="px-2 border-2 border-purple-700 rounded-3xl font-bold text-gray-300">Cast</span><span className="text-gray-300">{movieInfo?.Actors}</span>
            </div>
          </div>
          <div
            className="text-xs font-semibold text-black rounded-full cursor-pointer"
            onClick={() => props.onMovieSelect()}
          >
            <IoMdCloseCircle className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      ) : (
        <ThreeDots
          visible={true}
          height="60"
          width="60"
          color="rgb(126 34 206 / var(--tw-border-opacity))"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </div>
  );
};

export default MovieInfoComponent;

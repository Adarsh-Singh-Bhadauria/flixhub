import React from "react";

const MovieComponent = (props) => {
  return (
    <div
      className="flex flex-col justify-between p-2 w-72 shadow-lg cursor-pointer"
      onClick={() => {
        props.onMovieSelect(props.movie.imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="rounded-lg" src={props.movie.Poster} alt={props.movie.Title} />
      <div>
      <p className="font-bold text-white my-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {props.movie.Title}
      </p>
      <div className="flex justify-between">
        <p className="text-xs font-medium text-gray-300 whitespace-nowrap overflow-hidden capitalize overflow-ellipsis">
          Year : {props.movie.Year}
        </p>
        <p className="text-xs font-semibold text-gray-300 whitespace-nowrap overflow-hidden capitalize overflow-ellipsis">
          Type : {props.movie.Type}
        </p>
      </div>
      </div>
    </div>
  );
};

export default MovieComponent;

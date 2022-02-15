import React from "react";
import { useParams} from "react-router-dom";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  return (
      
    <div className='MovieDetails' >
   <iframe width="100%" height="500" src={movie.trailer}  
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      <div class="movie-inner">
      <h2>{movie.name}</h2>
      <p>{movie.summary}</p>
      
        <h2>Rating </h2>
        <p>{movie.rating}</p>
      </div>
      
    </div>    

  );
}




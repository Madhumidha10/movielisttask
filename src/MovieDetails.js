import React,{useState,useEffect} from "react";
import { useParams,useHistory} from "react-router-dom";
import Rating from '@mui/material/Rating';
import { grey } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

export function MovieDetails() {
  const { id } = useParams();
  const [movie,setMovie]=useState([]);
  const history=useHistory();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Madhumidha10/moviedb/movies/${id}`,
      {
        method: "GET",
      }
    ) // promise
      .then((data) => data.json()) // Response object
      .then((mv) => setMovie(mv))
      .catch((err)=>console.log(err));
}, []);
  //const movie = movieList[id];
  return (
      
    <div className='MovieDetails' >
   <iframe width="100%" height="480" src={movie.trailer}  
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> 
        
        
        <h2>{movie.name}</h2>
           <Rating key={movie.id} name="size-small" defaultValue={movie.rating} max={10} precision={0.5}
          emptyIcon={<StarIcon style={{ color: grey[100] }} fontSize="inherit" readOnly/>}  />
      <p>{movie.summary}</p>
      <Button variant="contained" style={{marginLeft:"auto"}} onClick={()=>{history.push(`/movies`)}} > Back </Button>
        
</div>
  );
}




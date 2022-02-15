import React, { useState } from "react";
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useParams,useHistory} from "react-router-dom";

export function EditMovie({ movieList, setMovieList }) {
    const history=useHistory();
    const { id } = useParams();
    const movie = movieList[id];
   
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [cast, setCast] = useState(movie.cast);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const [rating, setRating] = useState(movie.rating);
  return <div>
        <div className='itembg'>
    <Typography component="legend" variant="h4" sx={{bgcolor: 'text.primary',color: 'primary.contrastText', textAlign: "center" }}>Edit Movie</Typography>
    <TextField id="name" label="Enter the name..." variant="standard" defaultValue={name} onChange={e => setName(e.target.value)} />
    <TextField id="poster" label="Enter the URL..." variant="standard" defaultValue={poster} onChange={e => setPoster(e.target.value)} />
    <TextField id="cast" label="Enter the Cast..." variant="standard" defaultValue={cast} onChange={e => {

      const actors = e.target.value.split(',');
      setCast(actors);
    }} />
    <TextField id="summary" label="Enter the Summary..." variant="standard" defaultValue={summary} onChange={e => setSummary(e.target.value)} multiline />
    <TextField id="trailer" label="Enter the trailer..." variant="standard" defaultValue={trailer} onChange={e => setTrailer(e.target.value)} multiline />
    
    <TextField id="rating"
      label="Enter the Rating.."
      type="number"
      variant="standard"
      defaultValue={rating}
      onChange={e => setRating(parseInt(e.target.value))} />
    <Button variant="contained" onClick={() => {
      const updatedMovie = {
        name: name,
        poster: poster,
        cast: cast,
        summary: summary,
        rating: rating,
        trailer:trailer,
      };

      const copyMovieList = [...movieList];copyMovieList[id] = updatedMovie;setMovieList(copyMovieList);history.push("/movies");}
    }>Update Movie</Button>
  </div>
  </div>

}

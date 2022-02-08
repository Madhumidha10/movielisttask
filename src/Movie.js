import React, { useState } from "react";
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Movielist } from './Movielist';


export function Movie({ movieList,setMovieList }) {


console.log(7)
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [cast, setCast] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState(0);
  return <div className='itembg'>
    <Typography component="legend" variant="h4" sx={{ color: grey[900], textAlign: "center" }}>New Movie</Typography>
    <TextField id="name" label="Enter the name..." variant="standard" onChange={e => setName(e.target.value)} />
    <TextField id="poster" label="Enter the URL..." variant="standard" onChange={e => setPoster(e.target.value)} />
    <TextField id="cast" label="Enter the Cast..." variant="standard" onChange={e => {

      const actors = e.target.value.split(',');
      setCast(actors);
    }} />
    <TextField id="summary" label="Enter the Summary..." variant="standard" onChange={e => setSummary(e.target.value)} multiline />
    <TextField id="rating"
      label="Enter the Rating.."
      type="number"
      variant="standard"
      onChange={e => setRating(parseInt(e.target.value))} />
    <Button variant="contained" onClick={() => {
      const newMovie = {
        name: name,
        poster: poster,
        cast: cast,
        summary: summary,
        rating: rating,
      };

      setMovieList([...movieList, newMovie]);
    }}>Add Movie</Button>


    <div className='Movie_container'> {movieList.map(({ name, poster, cast, summary, rating }, index) => <Movielist key={index} name={name} poster={poster} cast={cast} summary={summary} rating={rating} />)}</div>
  </div>;
}

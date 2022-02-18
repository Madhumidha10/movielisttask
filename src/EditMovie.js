import React, { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useParams,useHistory} from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import {movieValidationSchema} from './AddMovie';

export function EditMovie() {
    
    const { id } = useParams();
    const [movie,setMoive]=useState(null);

  useEffect(() => {
   
  fetch(`${API}/movies/${id}`, {method: "GET",}) // promise
   .then((data) => data.json()) // Response object
  .then((mvs) => setMoive(mvs))}, []);


  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : <img 
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/712e6c8c-2488-454c-977c-9b77695b282f/d7s1sqj-f6c07feb-3613-47c3-8d4f-219681110c53.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83MTJlNmM4Yy0yNDg4LTQ1NGMtOTc3Yy05Yjc3Njk1YjI4MmYvZDdzMXNxai1mNmMwN2ZlYi0zNjEzLTQ3YzMtOGQ0Zi0yMTk2ODExMTBjNTMuZ2lmIn1dXX0.9wrdWP4PL00jEgkqP6D-p6LmP0pfRwxkUSHPKBNWbn4"
    alt="loading.."  />}</div>
  );


}

function EditMovieForm({movie})
{
  
  // const formik = useFormik({
  //   initialValues: { name: movie.name, poster: movie.poster,rating:movie.rating,trailer:movie.trailer,summary:movie.summary,cast:movie.cast },
  //   validationSchema: movieValidationSchema,
  //   onSubmit: (updatedMovie) => {
  //     // editMovie(updatedMovie);

  //   },
  // });

  const formik = useFormik({
    
    initialValues: {name:movie.name, poster:movie.poster, cast:movie.cast, summary:movie.summary, rating:movie.rating, trailer:movie.trailer},
    validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
            editMovie(updatedMovie);

    },
  });
  const history=useHistory();
  const editMovie = (updatedMovie) => {
    // const updatedMovie = {name: name,poster: poster,cast:cast,rating: rating,summary: summary,trailer: trailer,};
    // // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // // After PUT is complete -> movie to /movies
    fetch(`${API}/movies/${movie.id}`, 
    {method: "PUT",body: JSON.stringify(updatedMovie),
    headers: {"Content-Type": "application/json",},})
    .then(() => history.push("/movies"));
  
  };


  return    (
  
  <form onSubmit={formik.handleSubmit}>

  <div className='itembg'>
<Typography component="legend" variant="h4" sx={{ bgcolor: 'text.primary',color: 'primary.contrastText',textAlign: "center" }}>Edit Movie</Typography>
<TextField id="name" name="name" label="Enter the name..." variant="standard" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} 
error={formik.touched.name && formik.errors.name} helperText={ formik.errors.name} />
<TextField id="poster" 
error={formik.touched.poster && formik.errors.poster} helperText={ formik.errors.poster}
name="poster" label="Enter the URL..." variant="standard" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.poster}  />

<TextField id="cast" name="cast" label="Enter the Cast..." variant="standard"
error={formik.touched.cast && formik.errors.cast} helperText={ formik.errors.cast}

onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cast}
/>

<TextField id="summary" name="summary" label="Enter the Summary..." variant="standard"
onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.summary} 
error={formik.touched.summary && formik.errors.summary} helperText={ formik.errors.summary} multiline />

<TextField id="trailer" name="trailer" label="Enter the trailer..." variant="standard" 
onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.trailer}
error={formik.touched.trailer && formik.errors.trailer} helperText={ formik.errors.trailer}  />

<TextField id="rating" name="rating"
label="Enter the Rating.."
type="number"
variant="standard"
error={formik.touched.rating && formik.errors.rating} helperText={ formik.errors.rating}
onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.rating}/>

<Button type="submit" variant="contained" color="success" >Update</Button>
</div>
</form>
);
}


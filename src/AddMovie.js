import React, { useState } from "react";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {API} from './global';
import {useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export const movieValidationSchema = yup.object({
  name: yup
    .string()
    .max(15, "Need a longer poster 😄")
    .required("Why not fill this name? 😉"),
    poster: yup
    .string()
    .required("Why not fill this poster? 😉"),
    summary: yup
    .string()
    .required("Why not fill this summary? 😉")
    .min(20, "Need a longer summary 😄"),
    rating: yup
    .number()
    .min(0)
    .max(10)
    .required("why not fill this rating?"),
    trailer:yup
    .string()
    .required("why not fill this trailer?"),
    cast:yup
    .string("Need a , for each actor")
    .required("why not fill this cast?")

 
});

export function AddMovie() {
  const history=useHistory();
  
 
  const formik = useFormik({
    initialValues: { name: "", poster: "",rating:0,trailer:"",summary:"",cast:"" },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      newMovie.cast=[...newMovie.cast.split(',')]
            addMovie(newMovie);

    },
  });

  const addMovie=(newMovie)=>{
    // 1. method must be POST
          // 2. body - JSON data
          // 3. headers - JSON data
          fetch(`${API}/movies/`, {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => history.push("/movies"));
  }



  return <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='itembg'>
    <Typography component="legend" variant="h4" sx={{ bgcolor: 'text.primary',color: 'primary.contrastText',textAlign: "center" }}>New Movie</Typography>
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
  
  <Button type="submit" variant="contained" >Add Movie</Button>
  </div>
  </form>
  </div>

}

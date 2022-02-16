import { IconButton } from "@mui/material";
import React,{useState,useEffect} from "react";
import {Movielist} from "./Movielist";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory } from "react-router-dom";

export function MovieListContainer() {
  const history=useHistory();
  const [movieList,setMovieList]=useState([]);
  const API='https://my-json-server.typicode.com/Madhumidha10/moviedb';
  useEffect(() => getMovies(), []);
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMovieList(mvs));
  };

const deleteMovie=(id)=>{
  // fetch(`${API}/movies/${id}`, {
  //   method: "DELETE",
  // }).then(() => getMovies() )
 
//   const copyMovielist=[...movieList];
//  copyMovielist.splice(id,1);
//   setMovieList(copyMovielist)
}


  return <div className='Movie_container'>
     {movieList.map(({ name, poster, cast, summary, rating,id }, index) =>
      <Movielist key={index} name={name} poster={poster} cast={cast} summary={summary} rating={rating}
      deleteButton={
      <IconButton aria-label="delete" color="error"
      onClick={deleteMovie(id)}><DeleteIcon /></IconButton>}


      editButton={
        <IconButton aria-label="edit" color="secondary" 
        onClick={()=>{history.push(`/movies/edit/${id}`)
      
        }}><EditIcon /></IconButton>}
  
      id={id} />)}
      </div>;
}

import { IconButton } from "@mui/material";
import React from "react";
import {Movielist} from "./Movielist";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory } from "react-router-dom";

export function MovieListContainer({ movieList, setMovieList }) {
  const history=useHistory();
  return <div className='Movie_container'>
     {movieList.map(({ name, poster, cast, summary, rating }, index) =>
      <Movielist key={index} name={name} poster={poster} cast={cast} summary={summary} rating={rating}
      deleteButton={
      <IconButton aria-label="delete" color="error"
      onClick={()=>{
    
        const copyMovielist=[...movieList];
       copyMovielist.splice(index,1);
        setMovieList(copyMovielist)
      }}><DeleteIcon /></IconButton>}


      editButton={
        <IconButton aria-label="edit" color="secondary" 
        onClick={()=>{history.push(`/movies/edit/${index}`)
      
        }}><EditIcon /></IconButton>}
  
      id={index} />)}
      </div>;
}

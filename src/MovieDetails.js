import React from "react";
import { useParams,useHistory } from 'react-router-dom';

export function MovieDetails({ movieList}) {

  const { id } = useParams();
  const movie = movieList[id];
  const history=useHistory();
  return
  <div>
    <div className="movie-details-container">
      <div className="movie-specs">
        
      </div>
    </div>
  </div>
  // <div className='movie-list' key={index}>
  //   <Card sx={{ maxWidth: 345, bgcolor: grey[900] }} variant="outlined">


  //     <Avatar variant="square" alt={name} src={poster} sx={{ width: 345, height: 200 }} />

  //     <Typography component="legend" variant="h4" sx={{ color: grey[100], textAlign: "center" }}>{name}
  //       <IconButton aria-label="toggle" color="primary" onClick={() => setSelected(!selected)}>
  //         {selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
  //       {selected ? <Typography component="legend" variant="subtitle2" sx={{ color: grey[100], textAlign: "left" }}>{summary} </Typography> : ""}

  //     </Typography>

  //     <Typography component="legend" variant="h5" sx={{ color: grey[100], textAlign: "left" }}>Casting </Typography>
  //     <div className='cast'>
  //       {cast.map(nm => <List key={nm} style={{ color: grey[100] }}><PersonOutlineRoundedIcon sx={{ fontSize: "14px" }} />{nm}</List>)}
  //     </div>

  //     {/* <Typography style={toggle} component="legend" variant="subtitle2" sx={{color:grey[100]}} >{summary} </Typography>
  //             */}
  //     <Typography component="legend" variant="h6" sx={{ color: grey[100], textAlign: "center" }}>Rating : {rating}/10

  //       <Rating name="size-small" defaultValue={rating} max={10} precision={0.5} emptyIcon={<StarIcon style={{ color: grey[100] }} fontSize="inherit" />} readOnly />
  //     </Typography>
  //     <Counter />
  //   </Card>
  // </div>;
}

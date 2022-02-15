import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import InfoIcon from  '@mui/icons-material/Info';
import Box from '@mui/material/Box';

export function Movielist({ name, poster, cast, summary, rating,deleteButton,editButton,id}, index) {
  const styles = { color: rating > 7 ? "yellow" : "white" };
  const [selected, setSelected] = useState(false);
  const history=useHistory();
  const toggle = { display: selected ? "block" : "none" };
  return (



    <div className='movie-list' key={index}>
      <Card sx={{ maxWidth: 345, bgcolor: grey[900] }} variant="outlined">


        <Avatar variant="square" alt={name} src={poster} sx={{ width: 345, height: 200 }} />

        <Typography component="legend" variant="h4" sx={{ color: grey[100], textAlign: "center" }}>{name}
          <IconButton aria-label="toggle" color="primary" onClick={() => setSelected(!selected)}>
            {selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
          {selected ? <Typography component="legend" variant="subtitle2" sx={{ color: grey[100], textAlign: "left" }}>{summary} </Typography> : ""}

        </Typography>
         
       <Box sx={{width: 300,textAlign:"center"}} >
       <IconButton aria-label="toggle" color="primary" onClick={() =>history.push(`/movies/${id}`) }>
           <InfoIcon /></IconButton>
           {deleteButton} {editButton}
       </Box>
     


        <Typography component="legend" variant="h5" sx={{ color: grey[100], textAlign: "left" }}>Casting </Typography>
        <div className='cast'>
          {cast.map(nm => <List key={nm} style={{ color: grey[100] }}><PersonOutlineRoundedIcon sx={{ fontSize: "14px" }} />{nm}</List>)}
        </div>

        {/* <Typography style={toggle} component="legend" variant="subtitle2" sx={{color:grey[100]}} >{summary} </Typography>
              */}
        <Typography component="legend" variant="h6" sx={{ color: grey[100], textAlign: "center" }}>Rating : {rating}/10

          <Rating key={index} name="size-small" value={rating} max={10} precision={0.5}
          emptyIcon={<StarIcon style={{ color: grey[100] }} fontSize="inherit" readOnly/>}  />
        </Typography>
        <Counter />
       
      </Card>


    </div>





  );
}

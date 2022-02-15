import './App.css';
import React, { useState } from "react";
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
import { Switch,Route } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';
import { MovieListContainer } from './MovieListContainer';
import { TicTacToe } from './TicTacToe';
import { Colorbox } from './Colorbox';
import { Msg } from './Msg';
import {MovieDetails} from './MovieDetails'
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useParams,useHistory} from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';




export default function App() {
  const history=useHistory();
  const list = [
    {
    id:"100",
    name:"Bigil",
    poster:"https://chennaimemes.in/wp-content/uploads/2019/11/bigil-movie-1.jpg",
    cast:["Vijay","Nayanthara","Jackie Shroff","Kathir","Vivek","Yogi Babu","Daniel Balaji"],
    summary:"This movie revolves around on how a football player sacrifices his dream for his father, who is a gangster and who also wants his son to achieve big in football. Later, he gets a second chance to achieve his dream where he needs to coach a women's football team to glory with many obstacles.",
    rating:6.9,
    trailer:"https://www.youtube.com/embed/GR-Ui8-V2M0"

    },
    {
      id:"101",
      name:"Master",
      poster:"https://studymeter.in/wp-content/uploads/2020/03/master.jpg",
      cast:["Vijay","Vijay Sethupathi","Malavika Mohanan","Shanthanu Bhagyaraj","Andrea Jeremiah","Arjun Das","Nassar"],
      summary:"Master is an action film from India about a professor, JD, who is sent to teach at a juvenile reform school for three months. He clashes with an unscrupulous man, Bhavani, who controls the school's young inmates to cover up his own criminal activities.",
      rating:7.9,
      trailer:"https://www.youtube.com/embed/UTiXQcrLlv4"
          },
      {
        id:"102",
        name:"7aum Arivu",
        poster:"http://2.bp.blogspot.com/-RVbDsk8m5fs/Tp_4ONSBpAI/AAAAAAAAA8A/b0q8cacfDEE/s1600/303994_262097810499698_229757470400399_748634_1060716610_n.jpg",
        cast:["Suriya","Shruti Haasan","Johnny Tri Nguyen","Guinness Pakru","Abhinaya","Ilavarasu","Ashwin Kakumanu"],
        summary:"A genetic engineering student tries to revive the skills of a past legend and use them to save India from a deadly virus attack orchestrated by China.",
        rating:6.5,
        trailer:"https://www.youtube.com/embed/NfNmvyI-5tU"
        },
        {
          id:"103",
          name:"Bahubali",
          poster:"https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/f/5d/f5dea132-9744-11e8-841a-93b06f2d01a5/5b6495bf1e49a.image.jpg?resize=1052%2C630",
          cast:["Prabhas","Rana Daggubati","Tamannaah","Anushka Shetty","Ramya Krishna","Sathyaraj","Nassar"],
          summary:"In the kingdom of Mahishmati, Shivudu falls in love with a fair maiden. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
          rating:8,
          trailer:"https://www.youtube.com/embed/94BzBOpv42g"
        },
        {
          id:"104",
          name:"Pattas",
          poster:"https://st1.latestly.com/wp-content/uploads/2020/01/53.jpg",
          cast:["Dhanush","Sneha","Mehreen Pirzada","Naveen Chandra","Nassar","Munishkanth","Manobala"],
          summary:"Sakthi is a petty thief in a Chennai slum, who learns the Adimurai, the ancient and oldest form of martial arts, to fulfil his father Velappan's destiny. Meanwhile, an evil man and his son challenge Sakthi for a kickboxing tournament, and Sakthi agrees to participate in it.",
          rating:5.7,
          trailer:"https://www.youtube.com/embed/FqyayYP36mk"
        }
      
      
  ];
  const [movieList,setMovieList]=useState(list);
  const [mode,setMode]=useState("dark");
  const theme=createTheme({
    palette:{
      mode:mode,
    },
  });
 
   return (
  <ThemeProvider theme={theme}>
     <Paper style={{borderRadius:"0px",minHeight:"100vh"}} elevation={4} >
      <div className='App'>
        <AppBar position='static'>
          <Toolbar>
            <Button color="inherit" onClick={()=>{history.push("/")}} >Home</Button>
            <Button color="inherit" onClick={()=>{history.push("/movies")}} >Movies</Button>
            <Button color="inherit" onClick={()=>{history.push("/tic-tac-toe")}} >Tic Tac Toe</Button>
            <Button color="inherit" onClick={()=>{history.push("/color-game")}} >Color Game</Button>
            <Button color="inherit" onClick={()=>{history.push("/movies/add")}} >Add Movie</Button>
            <Button color="inherit" style={{ marginLeft: "auto" }}
            startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? "dark" : "light"} mode</Button>
          </Toolbar>
        </AppBar>
      <Switch>
      <Route exact path="/">
        <Msg />
      </Route>
      <Route path="/movies/add">
      <AddMovie movieList={movieList} setMovieList={setMovieList} />
      </Route>
      <Route path="/movies/edit/:id">
      <EditMovie movieList={movieList} setMovieList={setMovieList} />
      </Route>
      <Route path="/movies/:id">
        <MovieDetails movieList={movieList} /> 
          
      </Route>
      <Route path="/movies">
        

  
        <MovieListContainer  movieList={movieList} setMovieList={setMovieList} />
      </Route>
      <Route path="/color-game">
        <Colorbox />
      </Route>
      <Route path="/tic-tac-toe">
      <TicTacToe />
      </Route>
      <Route path="**">
      <PageNotFound />
      </Route>
      {/* <Route path="/">
        <Msg />
       
      </Route> */}
     
    </Switch>
      </div>
     </Paper>
 </ThemeProvider>






      
  
  
  );
}


function Movielist({name,poster,cast,summary,rating},index)
{
  const styles={color:rating>7?"yellow":"white"}
  const [selected, setSelected] = useState(false);
  const toggle={display:selected?"block":"none"}
  return( 
       
      
      
        <div className='movie-list' key={index}>
       <Card sx={{ maxWidth: 345,bgcolor:grey[900] }} variant="outlined" >
       
       
       <Avatar variant="square" alt={name} src={poster}  sx={{ width: 345, height: 200}}/>
       
       <Typography component="legend" variant="h4" sx={{color:grey[100],textAlign:"center"}} >{name} 
       <IconButton aria-label="toggle" color="primary" onClick={()=> setSelected(!selected)}>
          {selected?<ExpandLessIcon />:<ExpandMoreIcon />}</IconButton>
      {selected? <Typography  component="legend" variant="subtitle2" sx={{color:grey[100],textAlign:"left"}} >{summary} </Typography>:""}
     
       </Typography>
       
       <Typography component="legend" variant="h5" sx={{color:grey[100],textAlign:"left"}} >Casting </Typography> 
        <div className='cast'>
        {cast.map(nm=><List key={nm}  style={{ color:grey[100]}}><PersonOutlineRoundedIcon sx={{fontSize:"14px"}} />{nm}</List>)}
        </div>
        
    {/* <Typography style={toggle} component="legend" variant="subtitle2" sx={{color:grey[100]}} >{summary} </Typography>
      */}
       <Typography component="legend" variant="h6" sx={{color:grey[100],textAlign:"center"}} >Rating : {rating}/10 

       <Rating name="size-small" defaultValue={rating} max={10} precision={0.5}    emptyIcon={<StarIcon style={{ color:grey[100]}} fontSize="inherit" />}readOnly />
       </Typography>
       <Counter />
       </Card>
      
          
       </div>   
         
   
       
 

  );
}





{/* <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button> */}

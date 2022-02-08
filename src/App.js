import './App.css';
import React, { useState } from "react";
import ReactStars from 'react-stars'
import Button from '@mui/material/Button';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import { textAlign } from '@mui/system';
import { Link,Switch,Route } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function App() {
 
  const list = [
    {
    name:"Bigil",
    poster:"https://chennaimemes.in/wp-content/uploads/2019/11/bigil-movie-1.jpg",
    cast:["Vijay","Nayanthara","Jackie Shroff","Kathir","Vivek","Yogi Babu","Daniel Balaji"],
    summary:"This movie revolves around on how a football player sacrifices his dream for his father, who is a gangster and who also wants his son to achieve big in football. Later, he gets a second chance to achieve his dream where he needs to coach a women's football team to glory with many obstacles.",
    rating:6.9

    },
    {
      name:"Master",
      poster:"https://studymeter.in/wp-content/uploads/2020/03/master.jpg",
      cast:["Vijay","Vijay Sethupathi","Malavika Mohanan","Shanthanu Bhagyaraj","Andrea Jeremiah","Arjun Das","Nassar"],
      summary:"Master is an action film from India about a professor, JD, who is sent to teach at a juvenile reform school for three months. He clashes with an unscrupulous man, Bhavani, who controls the school's young inmates to cover up his own criminal activities.",
      rating:7.9
      },
      {
        name:"7aum Arivu",
        poster:"http://2.bp.blogspot.com/-RVbDsk8m5fs/Tp_4ONSBpAI/AAAAAAAAA8A/b0q8cacfDEE/s1600/303994_262097810499698_229757470400399_748634_1060716610_n.jpg",
        cast:["Suriya","Shruti Haasan","Johnny Tri Nguyen","Guinness Pakru","Abhinaya","Ilavarasu","Ashwin Kakumanu"],
        summary:"A genetic engineering student tries to revive the skills of a past legend and use them to save India from a deadly virus attack orchestrated by China.",
        rating:6.5
        },
        {
          name:"Bahubali",
          poster:"https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/f/5d/f5dea132-9744-11e8-841a-93b06f2d01a5/5b6495bf1e49a.image.jpg?resize=1052%2C630",
          cast:["Prabhas","Rana Daggubati","Tamannaah","Anushka Shetty","Ramya Krishna","Sathyaraj","Nassar"],
          summary:"In the kingdom of Mahishmati, Shivudu falls in love with a fair maiden. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
          rating:8
        },
        {
          name:"Pattas",
          poster:"https://st1.latestly.com/wp-content/uploads/2020/01/53.jpg",
          cast:["Dhanush","Sneha","Mehreen Pirzada","Naveen Chandra","Nassar","Munishkanth","Manobala"],
          summary:"Sakthi is a petty thief in a Chennai slum, who learns the Adimurai, the ancient and oldest form of martial arts, to fulfil his father Velappan's destiny. Meanwhile, an evil man and his son challenge Sakthi for a kickboxing tournament, and Sakthi agrees to participate in it.",
          rating:5.7
        }
      
      
  ];
  const [movieList,setMovieList]=useState(list);
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [cast,setCast]=useState("");
  const [summary,setSummary]=useState("");
  const [rating,setRating]=useState(0);
  
 
   return (
  
    // <div className='App'>
      
     


    // </div>
    
    <div className='App'>
       <ul>
        <li>
          <Link to="/movies">Movie</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
       
      </ul>
  

    <Switch>
      <Route exact path="/">
        <Msg />
      </Route>
      <Route path="/movies">
              <div className='itembg'>
  <Typography component="legend" variant="h4" sx={{color:grey[900],textAlign:"center"}} >New Movie</Typography>
  <TextField id="name" label="Enter the name..." variant="standard" onChange={e=>setName(e.target.value)}/> 
   <TextField id="poster" label="Enter the URL..." variant="standard" onChange={e=>setPoster(e.target.value)}/> 
   <TextField id="cast" label="Enter the Cast..." variant="standard" onChange={e=>{
    
     const actors =  e.target.value.split(',');
     setCast(actors);
}} /> 
   <TextField id="summary" label="Enter the Summary..." variant="standard" onChange={e=>setSummary(e.target.value)} multiline/> 
   <TextField id="rating"
      label="Enter the Rating.."
      type="number"
      variant="standard"
      onChange={e=>setRating(parseInt(e.target.value))}
    />
   <Button variant="contained"   onClick={()=>{const newMovie={ 
        
        name:name,
        poster:poster,
        cast:cast,
        summary:summary,
        rating:rating,
        
       };
       
    setMovieList([...movieList,newMovie]);
   }}>Add Movie</Button>
       </div>
   <div className='Movie_container'> {movieList.map(({name,poster,cast,summary,rating},index)=><Movielist key={index} name={name} poster={poster} cast={cast} summary={summary} rating={rating} />)
}</div> 
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
      
  
  
  );
}
function Msg()
{
  return <div>
    <h4>Welcome to the Home Page</h4>;
  </div>
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

function Colorbox()
{
  const [color,setColor]=useState("pink");
  const styles={background:color};
  const [colorList,setColorList]=useState(["red","Green","Blue",]);

  return(<div className='ColorBox'>
    <input style={styles} onChange={e=>setColor(e.target.value)} placeholder='Enter the color' value={color} />
    <button onClick={()=>setColorList([...colorList,color])}>Add color</button>
    {colorList.map((clr)=> 
    (<Addcolor color={clr} />))}
   
   
  </div>
  );
}
function Addcolor({color})
{
  const styles={
    backgroundColor:color,
    height:"25px",width:"200px",marginTop:"10px"}
  return (<div style={styles} ></div>);
}

function TicTacToe()
{
 
  const [board,setBoard]=useState([null,null,null,null,null,null,null,null,null]);
 
 // draw
const calculateDraw=(board) =>{
  for (let i = 0; i < board.length; i++) {
      if (board[i]===null) {
          return false;
      }
  }
  return true;
};
 
  
  const decideWinner=(board)=>{const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]];

  
  //if condition for winning
  for(let i=0;i<lines.length;i++){
    const [a,b,c]=lines[i];
    if(board[a]!==null &&board[a]===board[b] &&board[b]===board[c]){
      console.log("winner is",board[a])
     // setWinner(board[a]);
      return board[a];
    }
    
    }
    return null;
  };

  const winner= decideWinner(board);
 const [isXTurn,setisXTurn]=useState(true); 

  const handleClick=(index)=>
  {
    if(winner===null && board[index]===null)
    {
      const boardCopy=[...board];
      boardCopy[index]= isXTurn?"X":"O";
      setBoard(boardCopy);
      setisXTurn(!isXTurn);
      
    }

  }
  

  const { width, height } = useWindowSize();
  return (
  <div className='full-game'>

    {/* //draw/tie logic */}
       {calculateDraw(board)?<h2>Tie</h2>:""}
    
    {/* //player turn login */}
    
    {isXTurn?<h2>Player: X Turn</h2>:<h2>Player: O Turn</h2>}
    {/* //restart logic */}
    {/* //winnerlogic */}
    {winner?<h2>Winner is :{winner}</h2>:""}
    
    <div className='board'>
         {/* //winnerlogic */}
       
    {winner?<Confetti width={width} height={height} gravity={0.01} />:""}
    {board.map((val,index)=>(<GameBox val={val} onPlayerClick={()=>handleClick(index)} />))}

    <div className='choose-player'>
         {/* <h2>Who start the game?</h2>
         <input type="text" placeholder='type X or O' onchange={(e)=>setisXTurn(e.target.value)}/> */}
       
         </div>
   
    </div>
    <button onClick={()=>setBoard([null,null,null,null,null,null,null,null,null])}> Restart</button>
    
  </div> );
}

function GameBox({val,onPlayerClick})
{
  // const [val,setVal]=useState("");
  const styles={color:val==="X"?"green":"red"}
  return <div onClick={()=>onPlayerClick()}
  style={styles}
  className="game-box"
   >
    {val}

  </div>
}
// onClick={() => {
//   const updatedMovie = {
//     name: name,
//     poster: poster,
//     rating: rating,
//     summary: summary,
//     trailer: trailer,
//   };
//   const copyMovieList = [...movieList];
//   copyMovieList[id] = updatedMovie;
//   setMovieList(copyMovieList);
//   history.push("/movies");
// }}


import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { GameBox } from './GameBox';

export function TicTacToe() {

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

  // draw
  const calculateDraw = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        return false;
      }
    }
    return true;
  };


  const decideWinner = (board) => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [1, 4, 7], [0, 3, 6], [2, 5, 8]];


    //if condition for winning
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winner is", board[a]);
        // setWinner(board[a]);
        return board[a];
      }

    }
    return null;
  };

  const winner = decideWinner(board);
  const [isXTurn, setisXTurn] = useState(true);

  const handleClick = (index) => {
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setisXTurn(!isXTurn);

    }

  };


  const { width, height } = useWindowSize();
  return (
    <div className='full-game'>

      {/* //draw/tie logic */}
      {calculateDraw(board) ? <h2>Tie</h2> : ""}

      {/* //player turn login */}

      {isXTurn ? <h2>Player: X Turn</h2> : <h2>Player: O Turn</h2>}
      {/* //restart logic */}
      {/* //winnerlogic */}
      {winner ? <h2>Winner is :{winner}</h2> : ""}

      <div className='board'>
        {/* //winnerlogic */}

        {winner ? <Confetti width={width} height={height} gravity={0.01} /> : ""}
        {board.map((val, index) => (<GameBox val={val} onPlayerClick={() => handleClick(index)} />))}

        <div className='choose-player'>
          {/* <h2>Who start the game?</h2>
            <input type="text" placeholder='type X or O' onchange={(e)=>setisXTurn(e.target.value)}/> */}

        </div>

      </div>
      <button onClick={() => { setBoard([null, null, null, null, null, null, null, null, null]); setisXTurn(true); }}> Restart</button>

    </div>);
}

// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Square from "./square.jsx";



function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  
  const handleClick = () => {
  setSquares(["","","","","","","","", ""])
  setPlayer(true)
  }
  const calculateWinner = (arr) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i=0; i<lines.length;i++) {
      const [a, b, c ] = lines[i];
      if ( arr[a] &&
        arr[a] === arr[b] &&
        arr[a] === arr[c]
        ) {
          return `${arr[a]} is the winner!`
        }
    }
    return "who will win?";

  }
  return (
    <div className="App">
<span> {calculateWinner(squares)} </span>
      
      <div className="container">
        {squares.map((val,index) => {
          return (
          <Square 
            squares={squares}
            setSquares={setSquares}
            player={player}
            setPlayer={setPlayer}
            squareValue={val}
            index={index}/>)
        })}
      </div>
      <button onClick={handleClick}>Reset</button>

    </div>
  );
}


export default App;

import { useState } from "react"
import Card from "../Cards/Card";
import "./Grid.css"
import isWinner from "../isWinner/isWinner";


function Grid({ numberofCards }) {
    let [ board, setBoard ] = useState(Array(numberofCards).fill(""));
    let [ turn, setTurn] = useState(true);
    let [ winner, setWinner] = useState(null);

    function play(index) {
      if(turn === true) {
        board[index] = "X"
      } else {
        board[index] = "O"
      }
      let win = isWinner(board, turn ? "X" : "O")
      if(win) {
        setWinner(win)
      }
      setBoard([...board])
      setTurn(!turn);
    }

    function reset() {
      setBoard(Array(numberofCards).fill(""))
      setTurn(true)
      setWinner(null)
    }


  return (
    <div className="grid-wrapper">
        {
          winner && (
            <>
              <h1>Winner: {winner}</h1>
              <button onClick={reset}>Reset game</button>
            </>
          )
        }
        <h2>Current turn: {(turn) ? "X": "O"}</h2>
        <div className="grid">
          {
            board.map((item, index) => {
              return <Card gameEnd={(winner) ? true : false} key={index} player={item} onPlay={play} index={index} />
          })
          }
        </div>
    </div>
  )
}

export default Grid

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
              <h1 className="turn">
                {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`};
              </h1>
              <button className="reset" onClick={reset}>Reset game</button>
            </>
          )
        }
        <h2 className="turn">Current turn: {turn ? "X": "O"}</h2>
        <div className="grid">
          {
            board.map((el, idx) => (
             <Card gameEnd={!!winner} key={idx} player={el} onPlay={play} index={idx} />
            ))
          }
        </div>
    </div>
  );
}

export default Grid;

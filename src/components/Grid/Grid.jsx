import { useState } from "react"
import Card from "../Cards/Card";
import "./Grid.css"


function Grid({ numberofCards }) {
    let [ board, setBoard ] = useState(Array(numberofCards).fill(""));
  return (
    <div className="grid-wrapper">
        {
            board.map((item, index) => {
                return <Card key ={index} player={item} />
            })
        }
    </div>
  )
}

export default Grid

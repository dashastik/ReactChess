import { useState } from "react"
import gameManager from "../game"
import RenderingFigureInBoard from "../RenderingFigureInBoard"
import "./index.css"

const RenderingBoard = () => {

  const [count, setCount] = useState(0)

  const handleClick = (indexRow, indexColumn) => {
    gameManager.placeFigure(indexRow, indexColumn)
    setCount(count + 1)
    console.log(gameManager.board.field)
  }

  return (
    <div className="board">
      {
        gameManager.board.field.map((row, indexRow) => (
          <div className="board__row">
            {
              row.map((column, indexColumn) => (
                <div
                  className={"board__ceil" + ((indexRow + indexColumn) % 2 === 0 ? " board__ceil--white" : " board__ceil--black")}
                  onClick={() => handleClick(indexRow, indexColumn)}
                >
                  {column !== null &&
                    <RenderingFigureInBoard figure={column}/>
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default RenderingBoard
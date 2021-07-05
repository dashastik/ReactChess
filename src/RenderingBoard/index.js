import gameManager from "../game"
import "./index.css"

const RenderingBoard = () => {
  const handleClick = (indexRow, indexColumn) => {
    gameManager.placeFigure(indexRow, indexColumn)
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
                  className={"board__ceil" + ((indexRow + indexColumn) % 2  === 0 ? "" : " board__ceil--black")}
                  onClick={() => handleClick(indexRow, indexColumn)}
                >

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
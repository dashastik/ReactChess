import gameManager from "../game"
import "./index.css"

const RenderingFigure = () => {
  return(
    <div className="pawn"
    onClick={() => gameManager.createPawn("black")}>

    </div>
  )
}

export default RenderingFigure
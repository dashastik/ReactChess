import gameManager from "../game"
import "./index.css"

const RenderingFigure = () => {
  return (
    <div className="figures">
      <div className="figures__black">
        <div className="figure"
          onClick={() => gameManager.createPawn("black")}>
          <i className="fas fa-chess-pawn figure-black"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("black")}>
          <i className="fas fa-chess-knight figure-black"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("black")}>
          <i className="fas fa-chess-bishop figure-black"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("black")}>
          <i className="fas fa-chess-rook figure-black"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("black")}>
          <i className="fas fa-chess-queen figure-black"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("black")}>
          <i className="fas fa-chess-king figure-black"></i>
        </div>
      </div>

      <div className="figures__white">
        <div className="figure"
          onClick={() => gameManager.createPawn("white")}>
          <i className="fas fa-chess-pawn figure-white"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("white")}>
          <i className="fas fa-chess-knight figure-white"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("white")}>
          <i className="fas fa-chess-bishop figure-white"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("white")}>
          <i className="fas fa-chess-rook figure-white"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("white")}>
          <i className="fas fa-chess-queen figure-white"></i>
        </div>
        <div className="figure"
          onClick={() => gameManager.createPawn("white")}>
          <i className="fas fa-chess-king figure-white"></i>
        </div>
      </div>

    </div>
  )
}

export default RenderingFigure
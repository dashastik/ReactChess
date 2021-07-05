import Pawn from "../ChessPieces/Pawn";

class GameManager {
  constructor(gameBoard) {
    this.board = gameBoard
    this.preparedFigure = null
  }

  createPawn(color) {
    this.preparedFigure = new Pawn(color)
  }

  placeFigure(indexRow, indexColumn) {
    this.board.putFigure(this.preparedFigure, indexRow, indexColumn)
    this.preparedFigure = null
  }
}

export default GameManager
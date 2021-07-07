import Pawn from "../ChessPieces/Pawn";
import Knight from "../ChessPieces/Knight";
import Bishop from "../ChessPieces/Bishop";
import Rook from "../ChessPieces/Rook";
import Queen from "../ChessPieces/Queen";
import King from "../ChessPieces/King";

class GameManager {
  constructor(gameBoard) {
    this.board = gameBoard
    this.preparedFigure = null
  }

  createPawn(color) {
    this.preparedFigure = new Pawn(color)
  }

  createKnight(color) {
    this.preparedFigure = new Knight(color)
  }

  createBishop(color) {
    this.preparedFigure = new Bishop(color)
  }

  createRook(color) {
    this.preparedFigure = new Rook(color)
  }

  createQueen(color) {
    this.preparedFigure = new Queen(color)
  }

  createKing(color) {
    this.preparedFigure = new King(color)
  }

  placeFigure(indexRow, indexColumn) {
    this.board.putFigure(this.preparedFigure, indexRow, indexColumn)
    this.preparedFigure = null
  }
}

export default GameManager
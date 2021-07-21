import Pawn from "../../../src/game/ChessPieces/Pawn";
import Knight from "../../../src/game/ChessPieces/Knight";
import Bishop from "../../../src/game/ChessPieces/Bishop";
import Rook from "../../../src/game/ChessPieces/Rook";
import Queen from "../../../src/game/ChessPieces/Queen";
import King from "../../../src/game/ChessPieces/King";
import GameManager from "../../../src/game/GameManager";

test("create Pawn", () => {
  const gameManager = new GameManager()
  gameManager.createPawn("black")
  expect(gameManager.preparedFigure instanceof Pawn).toBe(true)
})

test("create Knight", () => {
  const gameManager = new GameManager()
  gameManager.createKnight("black")
  expect(gameManager.preparedFigure instanceof Knight).toBe(true)
})

test("create Bishop", () => {
  const gameManager = new GameManager()
  gameManager.createBishop("black")
  expect(gameManager.preparedFigure instanceof Bishop).toBe(true)
})

test("create Rook", () => {
  const gameManager = new GameManager()
  gameManager.createRook("black")
  expect(gameManager.preparedFigure instanceof Rook).toBe(true)
})

test("create Queen", () => {
  const gameManager = new GameManager()
  gameManager.createQueen("black")
  expect(gameManager.preparedFigure instanceof Queen).toBe(true)
})

test("create King", () => {
  const gameManager = new GameManager()
  gameManager.createKing("black")
  expect(gameManager.preparedFigure instanceof King).toBe(true)
})
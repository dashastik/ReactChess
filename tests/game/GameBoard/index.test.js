import FieldDoesNotExist from "../../../src/game/exceptions/FieldDoesNotExist"
import GameBoard from "./../../../src/game/GameBoard"

test("put figure in field: 1, 1", () => {
  const gameBoard = new GameBoard()
  gameBoard.putFigure("Pawn", 1,1)
  expect(gameBoard.field[1][1]).toBe("Pawn")
})

test("put figure in field: 3, 4", () => {
  const gameBoard = new GameBoard()
  gameBoard.putFigure("Pawn", 3,4)
  expect(gameBoard.field[3][4]).toBe("Pawn")
})

test("put figure in field: 0, 0", () => {
  const gameBoard = new GameBoard()
  gameBoard.putFigure("Pawn", 0,0)
  expect(gameBoard.field[0][0]).toBe("Pawn")
})

test("put figure in field: 8, 8", () => {
  const gameBoard = new GameBoard()
  expect(() => gameBoard.putFigure("Pawn", 8, 8)).toThrow(FieldDoesNotExist)
})


test("put figure in field: -10, -20", () => {
  const gameBoard = new GameBoard()
  expect(() => gameBoard.putFigure("Pawn", -10, -20)).toThrow(FieldDoesNotExist)
})

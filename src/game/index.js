import GameBoard from "./GameBoard"
import GameManager from "./GameManager"

const gameBoard = new GameBoard()
const gameManager = new GameManager(gameBoard)

export default gameManager

import FieldDoesNotExist from "./../exceptions/FieldDoesNotExist"

class GameBoard {

  constructor() {

    this.field = new Array(8).fill(0).map(() => new Array(8).fill(0).map(() => null))
  }

  putFigure(figure, indexRow, indexColumn) {

    if (indexRow < 0 || indexRow >= this.field.length) {
      throw new FieldDoesNotExist("indexRow non found")
    }
    if (indexColumn < 0 || indexColumn >= this.field[indexRow].length) {
      throw new FieldDoesNotExist("indexColumn non found")
    }
    this.field[indexRow][indexColumn] = figure
  }
}

export default GameBoard
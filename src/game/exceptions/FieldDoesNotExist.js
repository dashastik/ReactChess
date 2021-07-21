class FieldDoesNotExist extends Error {
  constructor (message) {
    super (message)
    this.name = "FieldDoesNotExist"
  }
}

export default FieldDoesNotExist

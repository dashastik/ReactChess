import "./index.css"

const RenderingFigureInBoard = ({figure}) => {
 
  return (
    <div className="figure-in-board">
      <i className={"fas fa-chess-"+ (figure.type) + " figure-" + (figure.color)}></i>
    </div>
  )
}

export default RenderingFigureInBoard
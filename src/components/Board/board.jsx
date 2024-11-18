import PropTypes from "prop-types"

function Board({ name, controls }) {
    return (
        <section className="board">
            <h2 className="board-name">{ name }</h2>
            <ul className="board-content">
                { controls.map((control, index) => {
                    return (
                        <li className="board-content-item" key={ "control-" + index }>
                            { control }
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Board.Prototype = {
    name: PropTypes.string,
    controls: PropTypes.array.isRequired
}

export default Board;

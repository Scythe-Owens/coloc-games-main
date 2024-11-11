import PropTypes from "prop-types";

function Tile({ title }) {
    return (
        <article className="tile">
            <h3 className="tile-title">{ title }</h3>
        </article>
    )
}

Tile.Prototypes = {
    title: PropTypes.string.isRequired,
}

export default Tile;

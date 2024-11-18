import React from "react";
import PropTypes from "prop-types";
import Board from "../Board/board";

function Tv({ media, controls }) {
    return (
        <section className="tv">
            <h2 className="tv-programme">{ media.name }</h2>
            <iframe src={ media.link } className="tv-media"/>
            { controls ?
                <Board
                    controls={ controls }
                />
                : null
            }
        </section>
    )
}

Tv.Prototype = {
    media: PropTypes.objectOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired,
    controls: PropTypes.array
}

export default Tv;

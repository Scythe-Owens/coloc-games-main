import React from "react";
import PropTypes from "prop-types";
import Collapse from "../../../../components/Collapse/collapse";
import Gallery from "../../../../components/Gallery/gallery";
import GameForm from "../../../../components/Form/gameForm";

function CreateGame({ games }) {
    return (
        <section className="admin">
            { games ?
                <section className="game-manager-index game-manager-games">
                    <h2 className="game-manager-index-title">Nos jeux</h2>
                    <Gallery
                        items={ games }
                    />
                </section>
            : null }
            <Collapse
                title="Nouveau jeu"
                content={ <GameForm/> }
            />
        </section>
    );
}

CreateGame.prototype = {
    games: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}

export default CreateGame;

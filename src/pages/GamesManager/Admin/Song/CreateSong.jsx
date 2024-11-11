import React from "react";
import PropTypes from "prop-types";
import Collapse from "../../../../components/Collapse/collapse";
import Gallery from "../../../../components/Gallery/gallery";
import SongForm from "../../../../components/Form/songForm";

function CreateSong({ songs }) {
    return (
        <section className="admin">
            { songs ?
                <section className="game-manager-index game-manager-songs">
                    <h2 className="game-manager-index-title">Nos chansons</h2>
                    <Gallery
                        items={ songs }
                    />
                </section>
            : null }
            <Collapse
                title="Nouvelle chanson"
                content={ <SongForm/> }
            />
        </section>
    );
}

CreateSong.prototype = {
    songs: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}

export default CreateSong;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { createMatch, createPlayer } from "../../utils/gameManagerClient";

function PlayerForm({ gameId, match, setMatch, players, setPlayers }) {
    const [fields, setFields] = useState([]);

    return (
        <form className="form add-player-form" id="add-player-form" onSubmit={ event => handleSubmit(event) }>
            <fieldset className="form-group add-player-form-group">
                <legend>Joueurs</legend>
                { fields.map((field, index) => {
                    return(
                        <div className="form-group-multifield" key={ 'player-' + index }>
                            <p className="form-group-multifield-legend">{ 'Ready Player ' + (index + 1) }</p>
                            <button className="button delete-button" onClick={ event => removeFields(event, index) }>X</button>
                            <fieldset className="form-group-multifield-field">
                                <label htmlFor={ "player-input-name-" + index } className="form-group-label">Nom</label>
                                <input type="text" id={ "player-input-name-" + index } name="name" value={ field.name || ""} onChange={ event => handleFields(event, index) } className="form-group-input"/>
                            </fieldset>
                        </div>
                    )
                }) }
                <button className="button form-group-button" onClick={ event => addFields(event) }>+ Ajouter un joueur</button>
            </fieldset>
            <input type="hidden" id="game" name="game" value={ gameId }/>
            <button className="button form-submit" type="submit">Start</button>
        </form>
    )

    function addFields(event) {
        event.preventDefault();

        setFields([...fields, { name: ''}]);
    }

    function removeFields(event, index) {
        event.preventDefault();

        let newFieldsValues = [ ...fields ];

        newFieldsValues.splice(index, 1);
        setFields(newFieldsValues);
    }

    function handleFields(event, index) {
        let newFieldsValues = [ ...fields ];

        newFieldsValues[index][event.target.name] = event.target.value;
        setFields(newFieldsValues);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const matchResponse = await createMatch(event.target);
        setMatch({ ...matchResponse }.match);

        let inputPlayers = [];
        if (!Array.isArray(event.target.name)) {
            inputPlayers.push(event.target.name);
        } else {
            inputPlayers = event.target.name;
        }

        inputPlayers.forEach(async (input) => {
            const subForm = new FormData();
            subForm.append("name", input.value);
            subForm.append("match", { ...matchResponse.match }._id);

            const playerResponse = await createPlayer(subForm);
            setPlayers([ ...players, { ...playerResponse }.player]);
        });
    }
}

PlayerForm.Prototypes = {
    gameId: PropTypes.string.isRequired
}

export default PlayerForm;

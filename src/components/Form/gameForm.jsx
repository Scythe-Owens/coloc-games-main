import { useState } from "react";
import { createGame } from "../../utils/gameManagerClient";

function GameForm() {
    const [fields, setFields] = useState([]);

    return (
        <form className="form add-game-form" method="POST" encType="multipart/form-data" onSubmit={ handleSubmit }>
            <fieldset className="form-group add-game-form-group">
                <label htmlFor="game-input-name" className="form-group-label">Nom</label>
                <input type="text" id="game-input-name" name="name" className="form-group-input"/>
            </fieldset>
            <fieldset className="form-group add-game-form-group">
                <label htmlFor="game-input-media" className="form-group-label">Image</label>
                <input type="file" id="game-input-media" name="media" accept="image/png, image/jpeg, image/webp" className="form-group-input"/>
            </fieldset>
            <fieldset className="form-group add-game-form-group">
                <label htmlFor="game-input-description" className="form-group-label">Description</label>
                <textarea id="game-input-description" name="description" className="form-group-input"></textarea>
            </fieldset>
            <fieldset className="form-group add-game-form-group">
                <legend>Règles</legend>
                { fields.map((field, index) => {
                    return(
                        <div className="form-group-multifield" key={ 'rule-' + index }>
                            <p className="form-group-multifield-legend">{ 'Règle n°' + (index + 1) }</p>
                            <button className="button delete-button" onClick={ event => removeFields(event, index) }>X</button>
                            <fieldset className="form-group-multifield-field">
                                <label htmlFor={ "game-input-rule-name-" + index } className="form-group-label">Nom</label>
                                <input type="text" id={ "game-input-rule-name-" + index } name="ruleName" value={ field.ruleName || ""} onChange={ event => handleFields(event, index) } className="form-group-input"/>
                            </fieldset>
                            <fieldset className="form-group-multifield-field">
                                <label htmlFor={ "game-input-rule-description-" + index } className="form-group-label">Description</label>
                                <textarea id={ "game-input-rule-description-" + index } name="ruleDescription" value={ field.ruleDescription || "" } onChange={ event => handleFields(event, index) } className="form-group-input"></textarea>
                            </fieldset>
                        </div>
                    )
                }) }
                <button className="button form-group-button" onClick={ event => addFields(event) }>+ Ajouter une règle</button>
            </fieldset>
            <button className="button form-submit" type="submit">Valider</button>
        </form>
    )

    function addFields(event) {
        event.preventDefault();

        setFields([...fields, { ruleName: '', ruleDescription: ''}]);
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

    function handleSubmit(event) {
        event.preventDefault();

        createGame(event.target);
    }
}

export default GameForm;
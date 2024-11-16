import React, { useState, useEffect } from "react";
import TagInput from "./Input/tagInput";
import { createCategory, readGames } from "../../utils/gameManagerClient";

function CategoryForm() {
    const [games, setGames] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getGames() {
            const games = await readGames();

            if (games) {
                setGames(games);
            }
        }

        getGames();
    }, []);

    return (
        <form className="form add-category-form" method="POST" onSubmit={ handleSubmit }>
            <fieldset className="form-group add-category-form-group">
                <label htmlFor="category-input-name" className="form-group-label">Nom</label>
                <input type="text" id="category-input-name" name="name" onChange={ handleChange } className="form-group-input"/>
            </fieldset>
            <fieldset className="form-group add-category-form-group">
                <label htmlFor="category-input-reward" className="form-group-label">Nombre de points</label>
                <input type="number" id="category-input-reward" name="reward" className="form-group-input"/>
            </fieldset>
            <fieldset className="form-group add-category-form-group">
                <legend>Jeux</legend>
                { games ?
                    <div className="form-group-content">
                        { games.map((game, index) => {
                            return (
                                <div key={ "game-input-" + index } className="form-group-tags add-category-form-group-tags">
                                    <TagInput
                                        name="games"
                                        label={ game.name }
                                        value={ game._id }
                                    />
                                </div>
                            )
                        }) }
                    </div>
                    : null
                }
            </fieldset>
            { error && <p>{error}</p> }
            <button className="button form-submit" type="submit">Valider</button>
        </form>
    )

    function handleChange(event) {
        const input = event.target;
        const label = document.querySelector('label[for=' + input.id + ']');

        if ("" === input.value) {
            setError("Veuillez remplir le champ " + label.innerText )
        } else {
            setError();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!error) {
            createCategory(event.target);
        }
    }
}

export default CategoryForm;

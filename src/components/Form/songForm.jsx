import React, { useState, useEffect } from "react";
import TagInput from "./Input/tagInput";
import { readCategories, createSong } from "../../utils/gameManagerClient";

function SongForm() {
    const [categories, setCategories] = useState(null);
    const [nameError, setNameError] = useState("");
    const [linkError, setLinkError] = useState("");

    useEffect(() => {
        async function getCategories() {
            const categories = await readCategories();

            if (categories) {
                setCategories(categories);
            }
        }

        getCategories();
    }, []);

    return (
        <form className="form add-song-form" method="POST" onSubmit={ handleSubmit }>
            <fieldset className="form-group add-song-form-group">
                <label htmlFor="song-input-name" className="form-group-label">Nom</label>
                <input type="text" id="song-input-name" name="name" onChange={ handleChange } className="form-group-input"/>
            </fieldset>
            <fieldset className="form-group add-category-form-group">
                <legend>Categories</legend>
                { categories ?
                    <div className="form-group-content">
                        { categories.map((category, index) => {
                            return (
                                <div key={ "category-input-" + index } className="form-group-tags add-song-form-group-tags">
                                    <TagInput
                                        name="categories"
                                        label={ category.name }
                                        value={ category._id }
                                    />
                                </div>
                            )
                        }) }
                    </div>
                    : null
                }
            </fieldset>
            <fieldset className="form-group add-song-form-group">
                <label htmlFor="song-input-link" className="form-group-label">Lien à intégrer</label>
                <input type="url" id="song-input-link" name="link" onChange={ handleChange } className="form-group-input"/>
            </fieldset>
            { nameError && <p>{ nameError }</p> }
            { linkError && <p>{ linkError }</p> }
            <button className="button form-submit" type="submit">Valider</button>
        </form>
    )

    function handleChange(event) {
        const input = event.target;
        const label = document.querySelector('label[for=' + input.id + ']');

        if ("name" === input.name && "" === input.value) {
            setNameError("Veuillez remplir le champ " + label.innerText)
        } else {
            setNameError();
        }

        if ("link" === input.name && "" === input.value) {
            setLinkError("Veuillez remplir le champ " + label.innerText)
        } else {
            setLinkError();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!nameError && !linkError) {
            createSong(event.target);
        }
    }
}

export default SongForm;

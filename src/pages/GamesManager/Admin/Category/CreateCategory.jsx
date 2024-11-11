import React from "react";
import PropTypes from "prop-types";
import Collapse from "../../../../components/Collapse/collapse";
import Gallery from "../../../../components/Gallery/gallery";
import CategoryForm from "../../../../components/Form/categoryForm";

function CreateCategory({ categories }) {
    return (
        <section className="admin">
            { categories ?
                <section className="game-manager-index game-manager-categories">
                    <h2 className="game-manager-index-title">Nos catégories</h2>
                    <Gallery
                        items={ categories }
                    />
                </section>
            : null }
            <Collapse
                title="Nouvelle catégorie"
                content={ <CategoryForm/> }
            />
        </section>
    );
}

CreateCategory.prototype = {
    categories: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}

export default CreateCategory;

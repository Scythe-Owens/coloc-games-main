import  React, { useState } from "react";
import PropTypes from "prop-types";
import chevronIcon from "../../assets/images/icons/chevron-up.svg";

function Collapse({ title, content }) {
    const [open, setOpen] = useState(false);

    return (
        <section className={ open ? "game-manager-section open" : "game-manager-section" }>
            <h2 className="game-manager-section-title" onClick={ collapse }>
                { title }
                <img src={ chevronIcon } alt="Icône de chevron" className="game-manager-section-title-icon"/>
            </h2>
            { content }
        </section>
    )

    function collapse() {
        setOpen(!open)
    }
}

Collapse.Prototypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
}

export default Collapse;

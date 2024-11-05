import  React, { useState } from "react";
import PageHeader from "../../components/PageHeader/pageHeader";
import GameForm from "../../components/Form/gameForm";
import chevronIcon from "../../assets/images/icons/chevron-up.svg";

function GamesManager() {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <PageHeader
                pageTitle="Gestionnaire de jeux"
                crumbs={ [
                    {
                        link: '/parametres',
                        label: 'Gestionnaire de jeux'
                    }
                ] }
            />
            <section className={ open ? "game-manager-section open" : "game-manager-section" }>
                <h2 className="game-manager-section-title" onClick={ collapse }>Nouveau jeu<img src={ chevronIcon } className="game-manager-section-title-icon"/></h2>
                <GameForm/>
            </section>
        </React.Fragment>
    )

    function collapse() {
        setOpen(!open)
    }
}

export default GamesManager;

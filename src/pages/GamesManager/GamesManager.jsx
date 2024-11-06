import  React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/pageHeader";
import Card from "../../components/Card/card";
import GameForm from "../../components/Form/gameForm";
import chevronIcon from "../../assets/images/icons/chevron-up.svg";
import { readGames } from "../../utils/gameManagerClient";

function GamesManager() {
    const [open, setOpen] = useState(false);
    const [games, setGames] = useState(null);
    
    useEffect(() => {
        async function getGames() {
            const games = await readGames();

            if (games) {
                setGames(games);
            }
        }

        getGames();
    });
    
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
            <article className="game-manager">
                <section className="game-manager-index">
                    <h2 className="game-manager-index-title">Nos jeux</h2>
                    <ul className="game-manager-index-gallery">
                        { games ? games.map((game, index) => {
                            return (
                                <li className="game-manager-index-gallery-item" key={ "game-" + index }>
                                    <Card
                                        title={ game.name }
                                        media={ game.media }
                                        description={ game.description }
                                        details={ game.rules }
                                    />
                                </li>
                            );
                        }) : "Aucun jeu" }
                    </ul>
                </section>
                <section className={ open ? "game-manager-section open" : "game-manager-section" }>
                    <h2 className="game-manager-section-title" onClick={ collapse }>Nouveau jeu<img src={ chevronIcon } className="game-manager-section-title-icon"/></h2>
                    <GameForm/>
                </section>
            </article>
        </React.Fragment>
    )

    function collapse() {
        setOpen(!open)
    }
}

export default GamesManager;

import React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/pageHeader";
import Card from "../../components/Card/card";
import Gallery from "../../components/Gallery/gallery";
import { readGames } from "../../utils/gameManagerClient";

function Games() {
    const [games, setGames] = useState(null);
    useEffect(() => {
        async function getGames() {
            const games = await readGames();

            if (games) {
                setGames(games);
            }
        }

        getGames();
    }, []);

    const gameCards = [];
    if (games) {
        games.forEach((game) => {
            gameCards.push(
                <Card
                    slug={ "/jeux/" + game.slug }
                    title={ game.name }
                    media={ game.media }
                    description={ game.description }
                    details={ game.rules }
                />
            )
        })
    }

    return (
        <React.Fragment>
            <PageHeader
                pageTitle="Selection du jeu"
                crumbs={ [
                    {
                        link: '/jeux',
                        label: 'Jeux'
                    }
                ] }
            />
            <div className="games">
                <Gallery
                    items={ gameCards }
                />
            </div>
        </React.Fragment>
    )
}

export default Games;

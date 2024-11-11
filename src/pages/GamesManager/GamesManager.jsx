import  React, { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/pageHeader";
import Card from "../../components/Card/card";
import Tile from "../../components/Tile/tile";
import CreateCategory from "./Admin/Category/CreateCategory";
import CreateGame from "./Admin/Game/CreateGame";
import CreateSong from "./Admin/Song/CreateSong";
import { readGames, readCategories, readSongs } from "../../utils/gameManagerClient";

function GamesManager() {
    const [games, setGames] = useState(null);
    const [categories, setCategories] = useState(null);
    const [songs, setSongs] = useState(null);
    
    useEffect(() => {
        async function getGames() {
            const games = await readGames();

            if (games) {
                setGames(games);
            }
        }

        async function getCategories() {
            const categories = await readCategories();

            if (categories) {
                setCategories(categories);
            }
        }

        async function getSongs() {
            const songs = await readSongs();

            if (songs) {
                setSongs(songs);
            }
        }

        getCategories();
        getGames();
        getSongs();
    }, []);

    const gameCards = [];
    if (games) {
        games.forEach((game) => {
            gameCards.push(
                <Card
                    title={ game.name }
                    media={ game.media }
                    description={ game.description }
                    details={ game.rules }
                />
            )
        })
    }

    const categoryTiles = [];
    if (categories) {
        categories.forEach((category) => {
            categoryTiles.push(
                <Tile
                    title={ category.name }
                />
            )
        })
    }

    const songTiles = [];
    if (songs) {
        songs.forEach((song) => {
            songTiles.push(
                <Tile
                    title={ song.name }
                />
            )
        })
    }

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
                <CreateGame
                    games={ gameCards.length > 0 ? gameCards : "Aucun jeu" }
                />
                <CreateCategory
                    categories={ categoryTiles.length > 0 ? categoryTiles : "Aucune catégorie" }
                />
                <CreateSong
                    songs={ songTiles.length > 0 ? songTiles : "Aucune chanson" }
                />
            </article>
        </React.Fragment>
    )
}

export default GamesManager;

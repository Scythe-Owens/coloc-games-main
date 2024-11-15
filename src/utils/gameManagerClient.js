// GAME API CALLS
export function createGame(multipart) {
    const game = {
        name: multipart.name.value,
        description: multipart.description.value,
        rules: [],
    };

    if ([] != multipart.ruleName && [] != multipart.ruleDescription) {
        multipart.ruleName.forEach(rule => {
            game.rules.push({name: rule.value});
        });

        multipart.ruleDescription.forEach((rule, index) => {
            game.rules[index]['description'] = rule.value;
        })
    }

    const bodyFormData = new FormData();
    bodyFormData.append('data', JSON.stringify(game));
    bodyFormData.append('image', multipart.media.files[0]);

    fetch('http://localhost:4000/api/game', {
        method: "POST",
        body: bodyFormData
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

export async function readGames() {
    try {
        const response = await fetch('http://localhost:4000/api/game', {
            method: "GET"
        });
        const games = await response.json();

        return games;
    } catch (error) {
        console.log(error);
        return;
    }
}

export async function readGame(slug) {
    try {
        const response = await fetch('http://localhost:4000/api/game/'.concat('', slug), {
            method: "GET"
        });
        const game = await response.json();

        return game;
    } catch (error) {
        console.log(error);
        return;
    }
}

// CATEGORY API CALLS
export function createCategory(form) {
    const data = {
        name: form.name.value,
        reward: form.reward.value,
        games: [],
    }

    if (!Array.isArray(form.games)) {
        data.games.push(form.games.value);
    }

    if (Array.isArray(form.games)) {
        form.games.forEach((game) => {
            if (game.checked) {
                data.games.push(game.value);
            }
        })
    }

    fetch('http://localhost:4000/api/category', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

export async function readCategories() {
    try {
        const response = await fetch('http://localhost:4000/api/category', {
            method: "GET"
        });
        const categories = await response.json();

        return categories;
    } catch (error) {
        console.log(error);
        return;
    }
}

// SONG API CALL
export function createSong(form) {
    const data = {
        name: form.name.value,
        categories: [],
        link: form.link.value,
    }

    if (!Array.isArray(form.categories)) {
        data.categories.push(form.categories.value);
    }

    if (Array.isArray(form.categories)) {
        form.categories.forEach((category) => {
            if (category.checked) {
                data.categories.push(category.value);
            }
        })
    }

    fetch('http://localhost:4000/api/song', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

export async function readSongs() {
    try {
        const response = await fetch('http://localhost:4000/api/song', {
            method: "GET"
        });
        const songs = await response.json();

        return songs;
    } catch (error) {
        console.log(error);
        return;
    }
}

// MATCH API CALL
export async function createMatch(form) {
    const data = {
        "name": form.name.value,
        "game": form.game.value
    };

    try {
        const response = await fetch('http://localhost:4000/api/match', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {
        console.log(error);
        return;
    }
}

// PLAYER API CALL
export async function createPlayer(formdata) {
    const data = {
        "name": formdata.get("name"),
        "match": formdata.get("match")
    };

    try {
        const response = await fetch('http://localhost:4000/api/player', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {
        console.log(error);

        return;
    }
}

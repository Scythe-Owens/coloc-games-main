// GAME API CALLS
export function createGame(multipart) {
    const game = {
        name: multipart.name.value,
        description: multipart.description.value,
        rules: [],
    };

    multipart.ruleName.forEach(rule => {
        game.rules.push({name: rule.value});
    });

    multipart.ruleDescription.forEach((rule, index) => {
        game.rules[index]['description'] = rule.value;
    })

    const bodyFormData = new FormData();
    bodyFormData.append('game', JSON.stringify(game));
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

// CATEGORY API CALLS
export function createCategory(form) {
    const category = {
        name: form.name.value,
        reward: form.reward.value,
        games: [],
    }

    if (!Array.isArray(form.games)) {
        category.games.push(form.games.value);
    }

    if (Array.isArray(form.games)) {
        form.games.forEach((game) => {
            if (game.checked) {
                category.games.push(game.value);
            }
        })
    }

    fetch('http://localhost:4000/api/category', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category)
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
    const song = {
        name: form.name.value,
        categories: [],
        link: form.link.value,
    }

    if (!Array.isArray(form.categories)) {
        song.categories.push(form.categories.value);
    }

    if (Array.isArray(form.categories)) {
        form.categories.forEach((category) => {
            if (category.checked) {
                song.categories.push(category.value);
            }
        })
    }

    fetch('http://localhost:4000/api/song', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song)
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

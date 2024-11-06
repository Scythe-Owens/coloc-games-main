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

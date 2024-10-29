export function createGame(multipart) {
    fetch('http://localhost:4000/api/game', {
        method: "POST",
        body: multipart
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}

const btn = document.getElementById("jokeBtn");

async function getJoke() {
    const data = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,explicit&type=single", {
        headers: {
            "Accept": "application/json"
        }
    });
    const jokeObj = await data.json();
    document.getElementById("joke").innerHTML = jokeObj.joke;
}
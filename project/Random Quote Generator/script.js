var quote = document.getElementById("quote");
var author = document.getElementById("author")
async function getQuote() {
    var data = await fetch("https://favqs.com/api/qotd", {
        headers:{"Accept": "application/json"}
    });
    var obj = await data.json();
    quote.innerHTML = obj.quote.body;
    author.innerHTML = obj.quote.author;
}
getQuote();
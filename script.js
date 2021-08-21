fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=atnsZ2Rllf0jJZVdkyIzhtjD9M32oGA9")
.then(data=>data.json())
.then(movies=> movies.results.forEach(x=>createcard(x)));

function createcard(x)
{
    let container = document.createElement("div");
    container.className="card"
    container.innerHTML=`
    <h2 class="title">${x.display_title}</h2>
    <p class="rating"><b>Rating:</b>${x.mpaa_rating}</p>
    <p class="critic"><b>Critic:</b>${x.byline}</p>
    <div class="sum-con">
    <p class="sum">Summary</p>
    <p>${x.summary_short}</p>
    <p class="info"><a href="${x.link.url}">More-Info</a></p>
    </div>
    `;
    document.body.append(container);
}
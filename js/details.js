const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;

if(params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const baseUrl = `https://rickandmortyapi.com/api/character/`;
const characterUrl = `${baseUrl}${id}`;

fetch(characterUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        characterDetails(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

function characterDetails(json) {
    const character = json;
    console.log(json);
    const container = document.querySelector(".container")
    let html = "";

    const details = `<div class="detail-container">
                        <img class="details-image" src="${character.image}" alt="${character.name}" />
                        <div class="detail-details">
                            <h1>${character.name}</h1>
                            <p>Status: <span class="value" id="status">${character.status}</span></p>
                            <p>Species: <span class="value" id="species">${character.species}</span></p>
                            <p>Origin: <span class="value" id="origin">${character.origin.name}</span></p>
                            <p>Location: <span class="value" id="location">${character.location.name}</span></p>                   
                        </div>
                    </div>`;
    container.innerHTML += details;
}
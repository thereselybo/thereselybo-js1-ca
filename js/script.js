const baseUrl = "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCharacter(json);
    })
    .catch(function() {
        document.location.href = "error.html";
        });

function createCharacter(json) {
    const results = json.results;
    const container = document.querySelector(".results");
    let html = "";

    results.forEach(function(character) {
        const name = character.name; 
        const imageUrl = character.image;
        let type;
        if(character.type) {
            type = character.type;
        } else {
            type = "Unknown";
        }
        const episodes = character.episode.length;

        const characterDetails = `<div class="col-sm-6 col-md-4 col-lg-3">                
                                    <div class="card">        
                                        <img class="image" src="${imageUrl}" alt="${name}">
                                        <div class="details">
                                            <h4 class="name">${name}</h4>
                                            <p>Type: ${type}</p>    
                                            <p>Episode count: ${episodes}</p>                                  
                                            <a class="btn btn-primary" href="details.html?id=${character.id}">Details</a>
                                        </div>
                                    </div>
                                </div>`;
        html += characterDetails;
    })

    container.innerHTML = html;
}
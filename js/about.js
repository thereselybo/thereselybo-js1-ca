function replaceWords() {
    //do something
    let contentH1 = document.querySelector(".content h1");
    console.log(contentH1);
    let contentDiv = document.querySelectorAll(".about blockquote p");
    console.log(contentDiv);

    const formattedHeading = contentH1.innerText.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    let formattedDiv;

    contentH1.innerText = formattedHeading;

    contentDiv.forEach(function(div){
        formattedDiv = div.innerText.replace(/the/g, "replaced").replace(/The/g, "Replaced");
        div.innerText = formattedDiv;
    });
    
    // for(let i = 0; i < contentDiv.length; i++) {
    //     formattedDiv = contentDiv[i].innerText.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    //     contentDiv[i].innerText = formattedDiv;
    // }

    // console.log(contentH1);
    // console.log(contentDiv);

    // console.log("4 seconds have passed");
}


setTimeout(replaceWords, 4000);
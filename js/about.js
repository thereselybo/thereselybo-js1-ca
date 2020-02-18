function replaceWords() {
  let contentH1 = document.querySelector(".content h1");
  console.log(contentH1);
  let contentDiv = document.querySelectorAll(".about blockquote p");
  console.log(contentDiv);

  const formattedHeading = contentH1.innerText
    .replace(/the/g, "replaced")
    .replace(/The/g, "Replaced");
  let formattedDiv;

  contentH1.innerText = formattedHeading;

  contentDiv.forEach(function(div) {
    formattedDiv = div.innerText
      .replace(/the/g, "replaced")
      .replace(/The/g, "Replaced");
    div.innerText = formattedDiv;
  });
}

setTimeout(replaceWords, 4000);

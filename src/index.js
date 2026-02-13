function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor:"",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apikey = "od0t2147a730a1fe9893b3c2a4735a11";
    let context =
    "You are a romantic poem expect and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br /> do not write html at the start. Make sure to follow the user intructions";
    let prompt = `User instructions: Generate a south african poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳Genarating a poem about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
    
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

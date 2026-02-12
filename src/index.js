function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "The poem will appear here",
      autoStart: true,
      delay: 1,
      cursor:"",
    });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);

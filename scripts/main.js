document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text-div");

  const textToType = [
    "-Organize your tasks and projects visually and efficiently.",
    "-Simplify project management with our Kanban board.",
    "-Make your projects flow smoothly with our application.",
    "-Collaborate effectively with your team using our interactive board.",
    "-Take control of your work with our card system.",
    "-Visualize your tasks and projects in one place.",
    "-The perfect Kanban board for tracking your activities.",
    "-Boost your team's productivity with our tool.",
    "-Track the progress of your projects in real-time.",
    "-One board, endless possibilities to organize your work.",
  ];

  const typingSpeed = 50;
  const delayBetweenPhrases = 100;

  function displayPhrases(index) {
    if (index < textToType.length) {
      const paragraf = document.createElement("p");
      paragraf.classList.add("paragraf-text");
      textElement.appendChild(paragraf);

      function type() {
        if (i < textToType[index].length) {
          paragraf.innerHTML += textToType[index].charAt(i);
          i++;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(function () {
            displayPhrases(index + 1);
          }, delayBetweenPhrases);
        }
      }

      let i = 0;
      type();
    }
  }

  displayPhrases(0);
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("site-header");

  if (window.scrollY >= 650) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
});

const btnLogin = document.getElementById("btn-login")


btnLogin.addEventListener("click", ()=>{
  window.location.href = "../Pages/userLogged.html";
})





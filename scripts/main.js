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

  -displayPhrases(0);
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("site-header");

  if (window.scrollY >= 650) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
});

const mainContainer = document.getElementById("main-container");
const loginContainer = document.getElementById("login-form");

const cookies = document.cookie;
const cookieArray = cookies.split(";");
let userData = null;

for (const cookie of cookieArray) {
  const trimmedCookie = cookie.trim();
  if (trimmedCookie.startsWith("userData=")) {
    const userDataString = trimmedCookie.split("=")[1];
    userData = JSON.parse(decodeURIComponent(userDataString));
    break;
  }
}


const btnLoggin = document.getElementById("btnLoggin");

// btnLoggin.addEventListener("click", () => {
//   const password = document.getElementById("password").value;
//   const username = document.getElementById("username").value;

//   if (
//     userData &&
//     password === userData.password &&
//     username === userData.username
//   ) {
//     console.log("¡Inicio de sesión exitoso!");
//     password.value = "";
//     username.value = "";

//     loginContainer.style.display = "none";
//     mainContainer.style.display = "grid";
//   } else {
//     console.log("Nombre de usuario o contraseña incorrectos.");
//   }
// });

// mainContainer.addEventListener("load", () => {
//   const addTableComponent = document.getElementById("addTableComponent");
//   const tablecontainer = document.getElementById("table-container");

//   addTableComponent.addEventListener("click", () => {
//     const tableComponent = document.createElement("column-table");
//     tablecontainer.insertBefore(tableComponent, addTableComponent);
//   });
// });

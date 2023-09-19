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

btnLoggin.addEventListener("click", () => {
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  if (
    userData &&
    password === userData.password &&
    username === userData.username
  ) {
    console.log("¡Inicio de sesión exitoso!");
    password.value = "";
    username.value = "";
    
    loginContainer.style.display = "none";
    mainContainer.style.display = "grid";




   
  } else {
    console.log("Nombre de usuario o contraseña incorrectos.");
  }
});

mainContainer.addEventListener("load", () => {
  const addTableComponent = document.getElementById("addTableComponent");
  const tablecontainer = document.getElementById("table-container");

  addTableComponent.addEventListener("click", () => {
    const tableComponent = document.createElement("column-table");
    tablecontainer.insertBefore(tableComponent, addTableComponent);
  });
});

const mainContainer = document.getElementById("main-container");
const loginContainer = document.getElementById("login-form");
const userDataName = document.getElementById("userData-name");


const cookies = document.cookie;
const cookieArray = cookies.split(";");
let userData = "";

for (const cookie of cookieArray) {
  const trimmedCookie = cookie.trim();
  if (trimmedCookie.startsWith("userData=")) {
    const userDataString = trimmedCookie.split("=")[1];
    userData = JSON.parse(decodeURIComponent(userDataString));
    break;
  }
}

mainContainer.addEventListener("load", () => {
  const addTableComponent = document.getElementById("addTableComponent");
  const tablecontainer = document.getElementById("table-container");

  addTableComponent.addEventListener("click", () => {
    const tableComponent = document.createElement("column-table");
    tablecontainer.insertBefore(tableComponent, addTableComponent);
  });
});



userDataName.innerText = `${userData.name} ${userData.surname}`
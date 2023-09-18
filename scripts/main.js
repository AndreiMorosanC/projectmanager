const addTableComponent = document.getElementById("addTableComponent");
const tablecontainer = document.getElementById("table-container");

addTableComponent.addEventListener("click", () => {
  const tableComponent = document.createElement("column-table");
  tablecontainer.insertBefore(tableComponent, addTableComponent);
});




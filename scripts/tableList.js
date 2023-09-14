const btnAdd = document.getElementById("btnAdd");
const tableList = document.getElementById("tableList");
const InputEnter = document.getElementsByClassName("newInput");

btnAdd.addEventListener("click", () => {
  const newInput = document.createElement("input");
  newInput.classList.add("newInput");

  tableList.appendChild(newInput);

  newInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13 || e.key === "Enter") {
      const valueInput = newInput.value;
      const tableElement = document.createElement("table-element");
      tableElement.setAttribute("data-value", valueInput);
      tableList.appendChild(tableElement);
      newInput.value = "";
      newInput.remove();
    }
  });
});

function addTableList() {}

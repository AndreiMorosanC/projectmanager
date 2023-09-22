const btnAdd = document.getElementById("btnAdd");
const tableList = document.getElementById("tableList");
const InputEnter = document.getElementsByClassName("newInput");
const tableListData = {
  inputData: []
}
btnAdd.addEventListener("click", () => {
  const newInput = document.createElement("input");
  newInput.classList.add("newInput");
  tableList.style.opacity= "100"
  tableList.appendChild(newInput);

  newInput.addEventListener("keydown", function (e) {
    
    if (e.keyCode === 13 || e.key === "Enter") {
      
      let valueInput = "";
      tableListData.inputData.push(newInput.value)
      const lastValue = tableListData.inputData[tableListData.inputData.length - 1];
      valueInput = lastValue;
      // tableListData.inputData.forEach((val)=>{
      //   valueInput += ` ${val}`
      //   console.log(tableListData)
      // });
      console.log(tableListData)
      const tableElement = document.createElement("table-element");
      tableElement.setAttribute("data-value", valueInput);
      tableList.appendChild(tableElement);
      newInput.value = "";
      newInput.remove();
     
    }
  });
});


  
export {tableListData};


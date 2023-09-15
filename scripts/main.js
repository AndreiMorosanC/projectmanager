

const addTableComponent = document.getElementById("addTableComponent")
const tablecontainer = document.getElementById("table-container")

addTableComponent.addEventListener("click",()=>{

    const tableComponent = document.createElement("table-component")
    tablecontainer.insertBefore(tableComponent, addTableComponent)
})
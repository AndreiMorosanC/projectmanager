const tableAddContainer = document.getElementById("tableAddContainer")
const projectListContainer = document.getElementById("projectListContainer");
const btnAddProject = document.getElementById("btnAddProject");
const boardContainer = document.getElementById("board-container")
const titleboard = document.getElementById("titleboard")
const userDataProject = {
  tittle: "",
  InputDataProject: [],

}

btnAddProject.addEventListener("click", ()=>{
  const inputTittleProject = document.createElement("input");
  inputTittleProject.placeholder  = "Name the Project"
  inputTittleProject.classList.add("inputTittleProject")
  projectListContainer.appendChild(inputTittleProject)

  inputTittleProject.addEventListener("keydown", (e)=>{
    if(e.key === "Enter" ){
      if( inputTittleProject.value !== ""){
        userDataProject.tittle = inputTittleProject.value;
        const card = document.createElement("p")
        card.classList.add("cardProject")
        card.innerText = userDataProject.tittle
        projectListContainer.appendChild(card)
        inputTittleProject.value = "";
        inputTittleProject.remove()
      }
     

    }
  })
})

projectListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cardProject")) {
    titleboard.innerText = userDataProject.tittle
  }
});


titleboard.addEventListener("click", ()=>{
  const inputh2 = document.createElement("input")
  inputh2.value = userDataProject.tittle

  titleboard.replaceWith(inputh2)
  inputh2.focus()


  inputh2.addEventListener("blur", ()=>{
    userDataProject.tittle = inputh2.value;
    const newBoardTittle = document.createElement("h2");
    newBoardTittle.innerText = userDataProject.tittle;
    inputh2.replaceWith(newBoardTittle);
  })
})
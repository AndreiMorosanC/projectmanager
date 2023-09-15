// class TableComponent{
//     constructor(data,tittle){
//         this.tittle = tittle;
//         this.data = data;
//         this.tittleEnter = false;

//     }

//     WaitingTittle(tittle, data){
//         if(this.tittleEnter === false){
//             const container = document.createElement("div");
//         }

//     }

// }

class TableComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
         #main{
          margin-top:15px;
          width:180px;
          min-height: 300px;
          height:auto;
          background-color: #151618;
          display:flex;
          flex-direction:column;
          align-items: center;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
         }
        .inputTable{
          width:80%;
          self-align:center;
          margin-top:15px;
          background-color: #26282e;
          border: 1px solid #01c973;
          color: white;
          margin-bottom:15px;
          
        }
        .newh2{
          color:white;
        }
        </style>
        <div id="main" >
            
        </div>
      `;

      

  }

  connectedCallback() {
    const inputTable =  document.createElement("input");
    inputTable.classList.add("inputTable")
    
    const main = this.shadowRoot.getElementById("main")
    main.appendChild(inputTable)

    inputTable.addEventListener("keydown", function (e) {
      if (e.keyCode === 13 || e.key === "Enter") {
        const valueInput = inputTable.value;
        const newh2 = document.createElement("h2");
        newh2.classList.add("newh2")
        newh2.innerHTML = valueInput;
        main.insertBefore(newh2, inputTable);
        inputTable.value = "";
      }
    })



  }
}


customElements.define("table-component", TableComponent);

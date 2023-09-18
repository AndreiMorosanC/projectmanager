/*class CardTable extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>

            .card{
                width:100%
                height:50px;
                color:white;
                
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


        </style>
        <div class="card" id="card-table">
            <input class="inputTable"  id="inputCard">
        </div>
    `;
  }

  connectedCallback() {
    const inputCard = this.shadowRoot.getElementById("inputCard");
    inputCard.addEventListener("keydown", (e) => {
      if (e.keyCode === 13 || e.key === "Enter") {
        const divCard = document.createElement("div");
        divCard.classList.add("cardText-container");
        divCard.setAttribute("draggable", "true");
        const textValue = document.createElement("p");
        const divCardContainer = this.shadowRoot.getElementById("card-table");
        textValue.innerHTML = inputCard.value;
        divCard.appendChild(textValue);
        divCardContainer.insertBefore(divCard, inputCard);
        inputCard.value = "";
      }
    });


    

    
  }
  
}

customElements.define("card-table", CardTable);*/


class CardTable extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = `
          <style>
              .card {
                  
                  height: 50px;
                  color: white;
                  
                  margin-top:20px;
                  display: flex;
                  flex-direction:column;
                  text-align:center;
                  align-items: center;
                  padding: 10px;
                  cursor: grab;
              }
              .inputTable {
                  width: 80%;
                  self-align: center;
                  margin-top: 15px;
                  background-color: #26282e;
                  border: 1px solid #01c973;
                  color: white;
                  margin-bottom: 15px;
              }
              .cardText-container {
                  background-color: #01c973;
                  color: white;
                  padding: 5px;
                  margin-bottom: 5px;
                  cursor: grab;
              }
          </style>
          <div class="card" id="card-table">
              <input class="inputTable" id="inputCard">
          </div>
      `;
  
      this.draggedCard = null;
  
      this.shadowRoot.getElementById("card-table").addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("cardText-container")) {
          this.draggedCard = e.target;
          e.dataTransfer.setData("text/plain", "");
        }
      });
  
      this.shadowRoot.getElementById("card-table").addEventListener("dragover", (e) => {
        e.preventDefault();
      });
  
      this.shadowRoot.getElementById("card-table").addEventListener("drop", (e) => {
        e.preventDefault();
        if (this.draggedCard && e.target !== this.draggedCard) {
          const cardContainer = this.shadowRoot.getElementById("card-table");
          cardContainer.insertBefore(this.draggedCard, e.target.nextSibling);
          this.draggedCard = null;
        }
      });
  
      this.shadowRoot.querySelectorAll(".cardText-container").forEach((card) => {
        card.setAttribute("draggable", "true");
  
        card.addEventListener("dragstart", () => {
          card.classList.add("dragging");
        });
  
        card.addEventListener("dragend", () => {
          card.classList.remove("dragging");
        });
      });
    }
  
    connectedCallback() {
      const inputCard = this.shadowRoot.getElementById("inputCard");
      inputCard.addEventListener("keydown", (e) => {
        if (e.keyCode === 13 || e.key === "Enter") {
          const divCard = document.createElement("div");
          divCard.classList.add("cardText-container");
          divCard.setAttribute("draggable", "true");
          const textValue = document.createElement("p");
          const divCardContainer = this.shadowRoot.getElementById("card-table");
          textValue.innerHTML = inputCard.value;
          divCard.appendChild(textValue);
          divCardContainer.insertBefore(divCard, inputCard);
          inputCard.value = "";
        }
      });
    }
  }
  
  customElements.define("card-table", CardTable);
  

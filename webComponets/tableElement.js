const template = document.createElement("template");
let firstClick = true;
template.innerHTML = `

  <style>
    #main{
      width:100%;
      height:auto;
      
      display:flex;
      flex-direction:row;
      justify-content: center;
      gap:25px;
      align-items:center;
      transition: transform 0.3s ease;
    }
    #main:hover{
    
      cursor:pointer;
      
      transform: scale(1.1);
    }
    #colorChange{
      background-color:blue;
      width:20px;
      height:20px
    }

    h2{
      color:white
    }
  </style>


  <div id="main">
    <div id="colorChange"></div>
    <h2 name="valueInput"></h2>
  </div>
`;

class TableElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
    this.colorChange = document.getElementById("colorChange");
    const main = shadowRoot.getElementById("main");
    const addTableComponent = document.getElementById("addTableComponent")
    main.addEventListener("click", () => {
      
      if(firstClick) {
        const tableComponent = document.createElement("table-component");
        const tableContainer = document.getElementById("table-container");
        tableComponent.style.marginLeft = "20px";
        tableContainer.insertBefore(tableComponent, addTableComponent);
        addTableComponent.style.opacity= "100"
        firstClick = false;
      }
    });
  }

  set dataValue(value) {
    this.setAttribute("data-value", value);
  }

  get dataValue() {
    return this.getAttribute("data-value");
  }

  connectedCallback() {
    this.render(this.dataValue);
  }

  render(data) {
    const slot = this.shadowRoot.querySelector("h2");
    slot.innerHTML = data;
  }

  colorChanger() {}
}

customElements.define("table-element", TableElement);

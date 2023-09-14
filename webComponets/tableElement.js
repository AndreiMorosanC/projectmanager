const template = document.createElement("template");

template.innerHTML = `

  <style>
    #main{
      display:flex;
      flex-direction:row;
      justify-content: center;
      gap:25px;
      align-items:center;
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
    this.main = shadowRoot.getElementById("main");
    this.main.addEventListener("click", () => {
      
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

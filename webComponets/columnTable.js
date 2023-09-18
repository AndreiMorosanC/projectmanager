class ColumnTable extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
            .column{
                margin-top:15px;
                width:180px;
                min-height: 300px;
                height:auto;
                background-color: #151618;
                ;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
            }

            .column-center{
                display: flex;
                flex-direction: column;
                text-align:center;
                align-items: center;
            }
        </style>
        <div class="column column-center" id="table-container">
            <slot class="card-table">
                <card-table></card-table>
            </slot>
        </div>
    `;



  }
}




customElements.define("column-table", ColumnTable);
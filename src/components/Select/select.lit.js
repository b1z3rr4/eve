import { LitElement, html, css } from 'lit';

class SelectElement extends LitElement {
    static properties = {
        options: { type: Array },
        selectedOption: { type: String },
        label: { type: String },
    };

    constructor() {
        super();
        this.loadOptions();
        this.isOpen = false;
    }

    static styles = css`
        .custom-select {
            position: relative;
            display: inline-block;
            width: auto;
        }
        
        .custom-select.fullfield {
            min-width: 260px;
        }

        .select-selected {
            position: relative;
            background: var(--background-color);
            border: 1px solid var(--background-color);
            padding: 10px;
            cursor: pointer;
            user-select: none;
            border-radius: 10px;
            color: var(--text-color);
        }

        .select-selected.fullfield {
            background: var(--primary-color);
            border: 1px solid var(--surface-color);
            color: var(--surface-color);
        }

        .select-options {
            display: none;
            position: absolute;
            background-color: var(--surface-color);
            border: 1px solid var(--surface-color);
            width: 100%;
            z-index: 99;
            list-style: none;
            margin: 0;
            padding: 0;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .select-options.open {
            display: block;
        }

        .select-options li {
            padding: 10px;
            cursor: pointer;
        }

        .select-options li:hover {
            background-color: #ddd;
        }

        .select-selected > p {
            margin: 0;
            margin-right: 20px;
        }

        .select-selected > .icon {
            position: absolute;
            top: 25%;
            right: 0;
        }

        .icon > svg {
            fill: var(--text-color);
        }

        .icon.fullfield > svg {
            fill: var(--surface-color);
        }
    `;

    toggleOptions() {
        this.isOpen = !this.isOpen;
        this.requestUpdate();
    }

    selectOption(option) {
        this.selectedOption = option.label;
        this.isOpen = false;
        this.requestUpdate();
    }

    loadOptions() {
        const options = this.querySelectorAll('eve-option');

        let tempOptionsArray = [];

        options.forEach((opt) => {
            tempOptionsArray.push({ 
                label: opt.getAttribute('value'),
            })
        })

        this.options = tempOptionsArray;
    }

    render() {
        return html`
          <div class="custom-select ${this.selectedOption ? "fullfield" : ""}">
            <div class="select-selected ${this.selectedOption ? "fullfield" : ""}" @click="${this.toggleOptions}">
              <p>${this.label}${this.selectedOption ? `: ${this.selectedOption}` : ''}</p>
              <div class="icon ${this.selectedOption ? "fullfield" : ""}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
            <ul class="select-options ${this.isOpen ? "open" : ""}">
              ${this.options.map(
                (option) => html`
                  <li @click="${() => this.selectOption(option)}">
                    ${option.label}
                  </li>
                `
              )}
            </ul>
          </div>
        `;
    }
}

export default SelectElement;

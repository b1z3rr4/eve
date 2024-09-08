import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Labelly } from '../../types';

@customElement("eve-select")
export class SelectElement extends LitElement {
  constructor() {
    super();
    this.loadOptions();
  }

  static styles: CSSResultGroup = css`
    .custom-select {
      font-family: var(--roboto-font);
    }

    .select-selected {
      padding: 10px;
      cursor: pointer;
      user-select: none;
      position: relative;
      white-space: nowrap;
      border-radius: 10px;
      color: var(--text-color);
      background: var(--background-color);
      border: 1px solid var(--background-color);
    }

    .select-selected.fulfilled {
      color: var(--surface-color);
      background: var(--primary-color);
      border: 1px solid var(--surface-color);
    }

    .select-options {
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 99;
      display: none;
      list-style: none;
      position: absolute;
      border-radius: 10px;
      background-color: var(--surface-color);
      border: 1px solid var(--surface-color);
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
      top: 25%;
      right: 0;
      position: absolute;
    }

    .icon > svg {
      fill: var(--text-color);
    }

    .icon.fulfilled > svg {
      fill: var(--surface-color);
    }
  `;

  @property()
  label: string = "";
  @property()
  selectedOption: string = "";

  isOpen: boolean = false;
  options: Array<Labelly> = [];

  toggleOptions() {
    this.unblockScroll();
  
    this.isOpen = !this.isOpen;
    this.requestUpdate();
    
    if (this.isOpen) {
      this.blockScroll();
      this.positionOptions();
    }
  }

  selectOption(option: Labelly) {
    this.unblockScroll();
    this.selectedOption = option.label;
    this.isOpen = false;
    this.requestUpdate();
  }

  loadOptions() {
    const options = this.querySelectorAll("eve-option");

    let tempOptionsArray: Array<Labelly> = [];

    options.forEach((opt) => {
      tempOptionsArray.push({
        label: opt.getAttribute("value") as string,
      });
    });

    this.options = tempOptionsArray;
  }

  positionOptions() {
    const selectSelected = this.shadowRoot!.querySelector('.select-selected') as HTMLElement;
    const selectOptions = this.shadowRoot!.querySelector('.select-options') as HTMLElement;

    if (selectSelected && selectOptions) {
      const rect = selectSelected.getBoundingClientRect();

      selectOptions.style.left = `${rect.left}px`;
      selectOptions.style.top = `${rect.bottom + window.scrollY}px`;
    }
  }

  blockScroll() {
    document.body.style.overflow = 'hidden';
    const parentElement = this.parentNode as HTMLDivElement;
    parentElement.style.overflow = 'hidden'
  }

  unblockScroll() {
    document.body.style.overflow = '';
    const parentElement = this.parentNode as HTMLDivElement;
    parentElement.style.overflow = ''
  }

  render(): TemplateResult<1> {
    return html`
      <div class="custom-select ${this.selectedOption ? "fulfilled" : ""}">
        <div
          class="select-selected ${this.selectedOption ? "fulfilled" : ""}"
          @click="${this.toggleOptions}"
        >
          <p>
            ${this.label}${this.selectedOption
        ? `: ${this.selectedOption}`
        : ""}
          </p>
          <div class="icon ${this.selectedOption ? "fulfilled" : ""}">
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
import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("eve-search")
export class SearchElement extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      width: 50%;
      display: block;
      box-sizing: border-box;
      font-family: var(--poppins-font);
      background-color: var(--surface-color);
    }

    .search-container {
      display: flex;
      margin: 0 10px;
      align-items: center;
      justify-content: center;
    }

    .search-container input {
      flex: 1;
      padding: 10px;
      color: var(--text-color);
      font-size: var(--poppins-size);
      font-family: var(--roboto-font);
      border: 1px solid var(--border-color);
    }

    .search-container input::placeholder {
      color: var(--muted-text-color);
    }

    .border-radius-left {
      border-radius: 10px 0px 0px 10px;
    }

    .border-radius-right {
      border-radius: 0px 10px 10px 0px;
    }

    .search-container button {
      border: none;
      display: flex;
      cursor: pointer;
      padding: 11px 20px;
      align-items: center;
      color: var(--surface-color);
      justify-content: center;
      font-size: var(--poppins-size);
      font-family: var(--roboto-font);
      background-color: var(--primary-color);
    }

    .search-container button:hover {
      background-color: var(--accent-color);
    }

    .search-container button i {
      color: #333;
      font-size: 1rem;
      margin-left: 5px;
    }
  `;

  @property()
  location: string = "";

  render(): TemplateResult<1> {
    return html`
      <div class="search-container">
        <input
          type="text"
          placeholder="Pesquisar por eventos..."
          class="border-radius-left"
        />
        <input
          type="text"
          placeholder="Localização"
          .value="${this.location}"
          disabled
        />
        <button class="border-radius-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path
              d="M10.5 2a8.5 8.5 0 1 0 6.832 13.148l5.23 5.23a1 1 0 0 0 1.414-1.414l-5.23-5.23A8.5 8.5 0 0 0 10.5 2zm0 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"
            />
          </svg>
        </button>
      </div>
    `;
  }
}
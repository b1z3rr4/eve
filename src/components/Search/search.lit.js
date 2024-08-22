import { LitElement, html, css } from 'lit';

class SearchElement extends LitElement {
    static properties = {
        location: {},
    };

    static styles = css`
    :host {
      display: block;
      width: 50%;
      background-color: var(--surface-color);
      box-sizing: border-box;
      font-family: var(--poppins-font);
    }

    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
    }

    .search-container input {
      padding: 10px;
      font-size: var(--poppins-size);
      border: 1px solid var(--border-color);
      font-family: var(--roboto-font);
      color: var(--text-color);
      flex: 1;
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
      padding: 11px 20px;
      background-color: var(--primary-color);
      color: var(--surface-color);
      border: none;
      cursor: pointer;
      font-size: var(--poppins-size);
      font-family: var(--roboto-font);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .search-container button:hover {
      background-color: var(--accent-color);
    }

    .search-container button i {
      margin-left: 5px;
      font-size: 1rem;
      color: #333;
    }
  `;

    render() {
        return html`
      <div class="search-container">
        <input type="text" placeholder="Pesquisar por eventos..." class="border-radius-left" />
        <input type="text" placeholder="Localização" .value="${this.location}" disabled />
        <button class="border-radius-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M10.5 2a8.5 8.5 0 1 0 6.832 13.148l5.23 5.23a1 1 0 0 0 1.414-1.414l-5.23-5.23A8.5 8.5 0 0 0 10.5 2zm0 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"/>
            </svg>
        </button>
      </div>
    `;
    }
}

export default SearchElement;

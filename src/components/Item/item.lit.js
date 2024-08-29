import { LitElement, html, css } from 'lit';

class ItemElement extends LitElement {
    static properties = {
        value: { type: String }
    }

    get option() {
        return this.shadowRoot.querySelector('span').textContent;
    }

    render() {
        return html`
          <span>
            ${this.value}
          </span>
        `;
    }
}

export default ItemElement;

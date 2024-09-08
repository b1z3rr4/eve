import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('eve-option')
export class ItemElement extends LitElement {
    get option() {
        return this.shadowRoot?.querySelector('span')?.textContent;
    }

    @property()
    value: string = '';

    render(): TemplateResult<1> {
        return html` <span> ${this.value} </span> `;
    }
}

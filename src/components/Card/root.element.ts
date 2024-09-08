import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("eve-card-root")
export class CardRootElement extends LitElement {
    @property()
    direction: string = 'row'

    static styles: CSSResultGroup = css`
        :host {
            width: 700px;
            display: flex;
        }
    
        div {
            gap: 24px;
            display: flex;
            max-width: 100%;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
        }

        .column {
            flex-direction: column;
        }

        .row {
            flex-direction: row;
        }

        @media (max-width: 768px) {
            :host {
                width: 100%;
            }

            div {
                border-radius: 10px;
                border: 1px solid var(--border-color);
            }
        }
  `;

    protected render(): TemplateResult<1> {
        return html`
      <div class="${this.direction}">
        <slot></slot>
      </div>
    `;
    }
}
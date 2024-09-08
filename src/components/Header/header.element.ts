import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement("eve-header")
export class HeaderElement extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      top: 0;
      z-index: 1;
      display: block;
      padding: 10px 20px;
      position: sticky;
      box-sizing: border-box;
      background-color: var(--surface-color);
      border-bottom: 1px solid var(--border-color);
    }

    header {
      padding: 20px;
      display: flex;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      margin-right: 100px;
      color: var(--primary-color);
      font-family: var(--poppins-font);
    }

    @media (max-width: 768px) {
      header {
        display: block;
      }
      
      .actions {
        display: none;
      }

      .logo {
        margin: 0;
        text-align: center;
      }
    }
  `;

  protected render(): TemplateResult<1> {
    return html`
      <header>
        <p class="logo">eve</p>
        <slot name="actions" class="actions"></slot>
      </header>
    `;
  }
}

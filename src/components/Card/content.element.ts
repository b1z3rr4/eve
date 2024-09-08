import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("eve-card-content")
export class CardContentElement extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      max-width: 70%;
    }

    div {
      gap: 12px;
      height: 100%;
      display: flex;
      padding: 20px;
      max-width: 100%;
      flex-direction: column;
      font-family: var(--roboto-font);
    }

    .title {
      margin: 0;
      font-weight: 600;
    }

    .description {
      margin: 0;
      height: 58px;
      overflow: hidden;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      color: var(--muted-text-color);
    }

    @media (max-width: 768px) {
      :host {
        max-width: 100%;
      }
    }
  `;

  @property()
  title: string = "";

  @property()
  description: string = "";

  protected render(): TemplateResult<1> {
    return html`
      <div>
        <p class="title">${this.title}</p>
        <p class="description">${this.description}</p>
      </div>
    `;
  }
}
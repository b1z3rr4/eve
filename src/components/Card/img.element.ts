import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("eve-card-img")
export class CardImgElement extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: flex;
      max-width: 30%;
    }

    div {
      height: 100%;
      padding: 20px;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      aspect-ratio: 16 / 9;
    }

    @media (max-width: 768px) {
      :host {
        display: flex;
        max-width: 100%;
      }
    }
  `;

  @property()
  src: string = "";

  protected render(): TemplateResult<1> {
    return html`
      <div>
        <img .src="${this.src}" />
      </div>
    `;
  }
}
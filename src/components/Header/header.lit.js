import { LitElement, html, css } from 'lit';

class HeaderElement extends LitElement {
    static styles = css`
    :host {
        display: block;
        width: 100%;
        padding: 10px 20px;
        background-color: var(--surface-color);
        box-sizing: border-box;
        border-bottom: 1px solid var(--border-color);
    }

    header {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 20px;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--primary-color);
        margin-right: 100px;
    }
  `;

    render() {
        return html`
      <header>
        <div class="logo">eve</div>
        <slot name="actions"></slot>
      </header>
    `;
    }
}

export default HeaderElement;

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 */
@customElement('red-sidebar')
export class RedSidebar extends LitElement {
  static override styles = css`
      :host {
          background-color: rgba(253, 240, 213, 0.5);
          width: 30%;

          padding: 15px;
      }

      input {
          width: 100%;
          height: 50px;

          box-sizing: border-box;
          padding: 25px;

          background-color: rgba(255, 255, 255, 0.5);

          border-radius: 25px;
          border: none;

          font-size: 15px;
      }

      .trending-container {
          margin-top: 30px;
      }

      .trending-container h3 {
          font-size: 14px;
      }

      .trending-container ol {
          line-height: 2.5;
      }

      .trending-container a {
          text-decoration: underline;
      }
  `;

  override render() {
    return html`
      <input placeholder="Chercher" type="text">
      <div class="trending-container">
        <h3>En tendance aujourd'hui</h3>
        <ol>
          <li><a>BRE-RMA</a></li>
          <li><a>Lorem Ipsum</a></li>
          <li><a>François Bayrou</a></li>
          <li><a>PS</a></li>
          <li><a>Trump</a></li>
        </ol>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'red-sidebar': RedSidebar;
  }
}
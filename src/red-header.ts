import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 */
@customElement('red-header')
export class RedHeader extends LitElement {
  static override styles = css`
      :host {
          height: 100px;
          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          background: white;

          -webkit-box-shadow: 0 0 150px 0 rgba(173,173,173,0.5);
          -moz-box-shadow: 0 0 150px 0 rgba(173,173,173,0.5);
          box-shadow: 0 0 150px 0 rgba(173,173,173,0.5);
      }
      
      h1 {
          color: rgba(193, 18, 31, 1);
          font-weight: 900;

          margin-left: 50px;
      }

      a {
          margin-right: 50px;
          padding: 10px;

          color: rgba(193, 18, 31, 1);

          background-color: rgba(193, 18, 31, 0.3);
          border: solid 3px rgba(193, 18, 31, 1);
          border-radius: 30px;

          text-decoration: none;
      }
  `;

  override render() {
    return html`
      <h1>RedGround</h1>

      <div class="account-wrapper">
        <a href="">MON COMPTE</a>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'red-header': RedHeader;
  }
}
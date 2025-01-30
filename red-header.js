var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * An example element.
 *
 */
let RedHeader = class RedHeader extends LitElement {
    render() {
        return html `
      <h1>RedGround</h1>

      <div class="account-wrapper">
        <a href="">MON COMPTE</a>
      </div>
    `;
    }
};
RedHeader.styles = css `
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
RedHeader = __decorate([
    customElement('red-header')
], RedHeader);
export { RedHeader };
//# sourceMappingURL=red-header.js.map